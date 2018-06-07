import fs from "fs"

export const gatherFiles = (path) => {
    fs.readdir(path, (err, files) => {
        if (err) {
            console.log(err)
        }
        console.log(files)
    })
}