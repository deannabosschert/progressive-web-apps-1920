const fetch = require('node-fetch')

const endpoint = "https://api.github.com"
const minor = "/cmda-minor-web"
const course = "/web-app-from-scratch-"
const year = "1920"
const tag = "/forks"
const limit = "50"
const apiLink = `${endpoint}/repos${minor}${course}${year}${tag}?per_page=${limit}`

const Api = {
  get() {
    return fetch(apiLink)
      .then(res => res.json())
      .then(res => {
        const nerds = res
        return nerds
      })
      .catch(err => {
        console.log(err)
      })
  }
}



module.exports = Api