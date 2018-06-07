import express from "express"
import hbs from "hbs"
import morgan from "morgan"

import { gatherFiles } from "./utils/file-listing"

// init
let app = express()
const port = 9000

// register middleware
app.set("view engine", hbs)
app.use(morgan("combined"))

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