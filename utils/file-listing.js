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
export const hbsTableListing = (items) => {
    let out = ""
    if (items.length === 0) {
        out = "Server has no files at the moment!"
        return out
    }
    items.array.forEach(item => {
        out += `<tr>${item}</tr>`
    })

    return out
}