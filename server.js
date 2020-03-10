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

app.get('/course/:repo', function(req, res) {
  const repo = req.params.repo
  Api.get("course", repo).then(data => {
    res.render('course.ejs', {
      nerds: data
    })
  })
})

app.get('/nerds/:id', function(req, res) {
  const nerdId = req.params.id
  Api.get("nerdProfile", nerdId).then(data => {
    const user = data[1].owner.login
    res.render('nerd.ejs', {
      nerd: data,
      userName: user
    })
  })
})

//
// app.get('/nerds/:id/:repo', function(req, res) {
//   const repo = req.params.repo
//   const nerdId = req.params.id
//   Api.get(nerdId, repo).then(data => {
//     res.render('detail.ejs', {
//       nerd: data
//     })
//   })
// })


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