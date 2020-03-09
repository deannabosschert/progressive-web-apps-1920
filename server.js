const express = require('express')
const app = express()
const fetch = require('node-fetch')

const endpoint = "https://api.github.com"
const minor = "/cmda-minor-web"
const course = "/web-app-from-scratch-"
const year = "1920"
const tag = "/forks"
const limit = "50"
const apiLink = `${endpoint}/repos${minor}${course}${year}${tag}?per_page=${limit}`



app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
  res.redirect('/nerds')
})

app.get('/nerds', function(req, res) {
  fetch(apiLink)
    .then(res => {
      return res.json()
    })
    .then(json => {
      const data = json
      res.render('index', {
        nerds: data
      })
      // console.log(data[1].avatar_url)
    })

    //
    // .then(json => {
    //   const nerds = json.results
    //   console.log(nerds[1])
    //   res.render('index', {
    //     nerds: nerds
    //   })
    //   // Data.store(`${route}`, data)
    // })
    .catch(err => {
      console.log(err)
    })
})
//
// const API = {
//   get: (route) => {
//     const query = getQuery(route)
//     const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`
//     fetch(url, config)
//       .then(res => {
//         return res.json()
//       })
//       .then(json => {
//         const data = json.results
//         Data.store(`${route}`, data)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }
// }
//

//
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