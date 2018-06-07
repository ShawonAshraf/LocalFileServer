import fs from "fs"

export const gatherFiles = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            let fileList = []
            if (err) {
                reject(err)
            }
            // add complete path
            for (let i = 0; i < files.length; i++) {
                let fileObj = {
                    fileName: `${path}/${files[i]}`
                }
                fileList.push(fileObj)
            }

            // resolve
            resolve(fileList)
        })
    })
}

// lists file urls in hbs view table
export const hbsTableListing = (files) => {
    let out = ""
    if (files.length === 0) {
        out = "Server has no files at the moment!"
        return out
    }
    files.forEach(file => {
        let fileInfo = file["fileName"].split("/")

        let path = fileInfo[0]
        let name = fileInfo[1]
        out += `<tr class="row">
            <td class="col">${name}</td>

            <td class="col">
                <a class="btn btn-success" href="${path}/${name}"></a>
            </td>
        </tr>`
    })

    return out
}