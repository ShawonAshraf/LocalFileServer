import fs from 'fs';

export const gatherFiles = path => new Promise((resolve, reject) => {
  fs.readdir(path, (err, files) => {
    const fileList = [];
    if (err) {
      reject(err);
    }
    // add complete path
    for (let i = 0; i < files.length; i++) {
      const fileObj = {
        fileName: `${path}/${files[i]}`,
      };
      fileList.push(fileObj);
    }

    // resolve
    resolve(fileList);
  });
});

// lists file urls in hbs view table
export const hbsTableListing = (files) => {
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
