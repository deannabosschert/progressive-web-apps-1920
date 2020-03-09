const express = require('express')
const app = express()
const Api = require('./modules/Api.js');


app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
  res.redirect('/nerds')
})

app.get('/nerds', function(req, res) {
  Api.get().then(data => {
    res.render('index.ejs', {
      nerds: data
    })
  })
})


// app.get('/stories/:id', function(req, res) {
//   request(host + req.params.id, function(error, response, body) {
//     const data = JSON.parse(body)
//     res.render('detail.ejs', {
//       story: data
//     })
//   })
// })
//
// app.get('/search', function(req, res) {
//   request(host + req.params.id, function(error, response, body) {
//     const data = JSON.parse(body)
//     res.render('detail.ejs', {
//       story: data
//     })
//   })
// })

const server = app.listen(1337, function() {
  console.log('server is running on port 1337')
})