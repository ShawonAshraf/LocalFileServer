import '@babel/polyfill';

import { join } from 'path';
import { readdir, stat } from 'fs';
import { promisify } from 'util';

// promisify
// https://gist.github.com/timoxley/0cb5053dec107499c8aabad8dfd651ea#gistcomment-2672424
const readdirP = promisify(readdir);
const statP = promisify(stat);

export const gatherFiles = async (dir, allFiles = []) => {
  const files = (await readdirP(dir)).map(f => join(dir, f));
  allFiles.push(...files);

  await Promise.all(
    files.map(
      async f => (await statP(f)).isDirectory() && gatherFiles(f, files),
    ),
  );

  return allFiles;
};

// lists file urls in hbs view table
export const hbsTableListing = (files) => {
  let out = '';
  if (files.length === 0) {
    out = 'Server has no files at the moment!';
    return out;
  }

  files.forEach((file) => {
    const fileInfo = file.split('/');

    const path = fileInfo[0];
    const name = fileInfo[1];
    out += `<tr class="row">
            <td class="col">${name}</td>

            <td class="col">
                <a class="btn btn-success" target=blank href="${path}/${name}">Download</a>
            </td>
        </tr>`;
  });

  return out;
};
