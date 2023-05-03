const express = require('express')
const app = express()
const port = 5000
let cors = require('cors')
app.use(cors())
const chefsData = require("./data/data.json")
const chefdetails = require("./data/singledata.json")

app.get('/', (req, res) => {
  res.send('server is running!')
})
app.get("/chefs", (req, res) => {
  res.send(chefsData.chefs);
})

app.get("/chefs/:id", (req, res)=> {
  const id = parseInt(req.params.id);
  const chefdtls = chefdetails.chefs.filter(c => parseInt(c.id) === id)
    res.send(chefdtls);

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })