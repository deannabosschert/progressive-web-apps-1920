const express = require('express')
const app = express()
const Api = require('./modules/Api.js');


app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', function(req, res) {
  res.redirect('/nerds')
})

// app.get('/nerds', function(res, json) {
//   Api.get()
//   console.log(json)
//   const data = json
//   res.render('index', {
//     nerds: data
//   })
// })


app.get('/nerds', function(req, res) {
  Api.get().then(data => {
    res.render('index.ejs', {
      nerds: data
    })
  })
})

// //
// // app.get('/nerds', function(req, res, nerds) {
// //   Api.get().then(res => {
// //     // const nerds = JSON.parse(res)
// //     // console.log(res)
// //     // const nerds = res
// //     // console.log(nerds)
// //     res.render('index.ejs', {
// //       nerds: res
// //     })
//
//
//
//     // console.log(data)
//     // request(function(error, response, body) {
//     // const data = JSON.parse(data);
//     // res.render('index.ejs', {
//     // nerds: data
//     // })
//     // })
//   })
// })


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