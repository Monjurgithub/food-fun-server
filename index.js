const express = require('express')
const app = express()
const port = 5000
let cors = require('cors')
app.use(cors())
const chefsData = require("./data/data.json")




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })