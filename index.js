const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
const chefInfo = require('./data/Chef.json');
const detailsInfo = require('./data/Information.json');


app.get('/chefInfo',(req,res)=>{
    res.send(chefInfo);
})
app.get('/detailsInfo',(req,res)=>{
  res.send(detailsInfo);
})

app.get('/detailsInfo/:id', (req,res) =>{
  const id = req.params.id;
  console.log(id);
  const selectedInfo = detailsInfo.find(i => parseInt(i.id) === id);
  res.send(selectedInfo);
})
app.get('/chefInfo/:id',(req,res) =>{
  const id = parseInt(req.params.id);
  console.log(id);
  const informationChefs = detailsInfo.filter(i => parseInt(i.id) === id);
  res.send(informationChefs);
})









app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})