const express = require('express')
const app = express()
const port = 5000
let cors = require('cors')
app.use(cors())
const chefsData = require("./data/data.json")

app.get('/', (req, res) => {
  res.send('server is running!')
})
app.get("/chefs", (req, res) => {
  res.send(chefsData.chefs);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })