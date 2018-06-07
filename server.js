import express from "express"
import { gatherFiles } from "./utils/file-listing"

// init
let app = express()
const port = 9000

app.get("/", (req, res) => {
    let path = "files"
    gatherFiles(path)
        .then(files => {
            res.send(files)
        })
})

app.listen(port, () => {
    console.log(`Server Running @ PORT :: ${port}`)
})