import express from "express"
import { gatherFiles } from "./utils/file-listing"

let app = express()
const port = 3000

app.get("/", (req, res) => {
    let path = "files"
    gatherFiles(path)
        .then(files => {
            res.send(files)
        })
})

app.listen(3000, () => {
    console.log(`Server Running @ PORT :: ${port}`)
})