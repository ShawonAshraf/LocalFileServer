import express from "express"
import hbs from "hbs"
import morgan from "morgan"

import { gatherFiles, hbsTableListing } from "./utils/file-listing"

// init
let app = express()
const port = 9000

// register middleware
app.set("view engine", hbs)
app.use(morgan("combined"))

// register hbs helper
hbs.registerHelper("list", hbsTableListing)
hbs.registerPartials(__dirname + "/views/partials")

// static dir for files
app.use("/files", express.static(__dirname + "/files"))

// public dir
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    let path = "files"
    gatherFiles(path)
        .then(files => {
            res.render("index.hbs", {
                files: files,
                title: "rockash93's Local File Server"
            })
        }).catch(err => {
            res.render("bad.hbs", {
                err: err,
                title: "rockash93's Local File Server"
            })
        })
})

app.listen(port, () => {
    console.log(`Server Running @ PORT :: ${port}`)
})