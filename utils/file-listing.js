import fs from "fs"
import path from "path"

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