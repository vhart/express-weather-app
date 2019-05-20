const express = require("express")
const path = require("path")
const hbs = require("hbs")

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", viewsPath)
app.use(express.static(publicDirectoryPath))

hbs.registerPartials(partialsPath)

app.get("", (req, res) => {
  res.render("index", {
    title: "Nope",
    name: "Varindra Hart"
  })
})

app.get("/about", (_, res) => {
  res.render("about", {
    title: "About",
    name: "Varindra Hart"
  })
})

app.get("/help", (_, res) => {
  res.render("help", {
    title: "Help",
    name: "Varindra Hart",
    helpDescription: "This is help"
  })
})

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is american idoling",
    location: "Wherever you at baby"
  })
})

app.get("*", (req, res) => {
  res.render("index", {
    title: "Looks like you wandered off on your own..",
    name: "Varindra Hart"
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})