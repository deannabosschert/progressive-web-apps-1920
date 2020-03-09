const fetch = require('node-fetch')

const endpoint = "https://api.github.com"
const course = "/web-app-from-scratch-"
const year = "1920"
const limit = "50"
const repo = `${course}${year}`
// const apiLink = `${endpoint}/repos${owner}${repo}?per_page=${limit}`

const Api = {
  get(route) {
    const owner = getOwner(route)
    const tag = getTag(route)

    const apiLink = `${endpoint}/repos/${owner}${repo}${tag}?per_page=${limit}`
    console.log(apiLink)
    return fetch(apiLink)
      .then(res => res.json())
      .catch(err => {
        console.log(err)
      })
  }
}


function getOwner(route) {
  if (route === "overview") {
    const owner = "cmda-minor-web"
    return owner
  } else {
    const owner = `${route}`
    return owner
  }
}


function getTag(route) {
  if (route === "overview") {
    const tag = "/forks"
    return tag
  } else {
    const tag = ""
    return tag
  }
}



module.exports = Api