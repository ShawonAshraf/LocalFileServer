import fs from 'fs';

export const gatherFiles = async (path) => {
  try {
    const fileList = await fs.readdir(path);
    return fileList;
  } catch (e) {
    return [];
  }
};

// lists file urls in hbs view table
export const hbsTableListing = async (files) => {
  let out = '';
  if (files.length === 0) {
    out = 'Server has no files at the moment!';
    return out;
  }

  files.forEach((file) => {
    const fileInfo = file.fileName.split('/');

    const path = fileInfo[0];
    const name = fileInfo[1];
    out += `<tr class="row">
            <td class="col">${name}</td>

            <td class="col">
                <a class="btn btn-success" href="${path}/${name}">Download</a>
            </td>
        </tr>`;
  });

  return out;
};
