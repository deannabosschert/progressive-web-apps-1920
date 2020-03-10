const express = require('express')
const app = express()
const Api = require('./modules/Api.js');


app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
  Api.get("home").then(data => {
    res.render('index.ejs', {
      repos: data
    })
  })
})

app.get('/course/:id', function(req, res) {
  console.log(req.params.id)
  Api.get("course", req.params.id).then(data => {
    res.render('course.ejs', {
      nerds: data
    })
  })
})

app.get('/nerds/:id', function(req, res) {
  console.log(req.params.id)
  Api.get(req.params.id).then(data => {
    res.render('detail.ejs', {
      nerd: data
    })
  })
})


// app.get('/search', function(req, res) {
//   request(host + req.params.id, function(error, response, body) {
//     const data = JSON.parse(body)
//     res.render('detail.ejs', {
//       story: data
//     })
//   })
// })

const server = app.listen(8000, function() {
  console.log('server is running on port 8000')
})