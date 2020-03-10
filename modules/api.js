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
    return fetch(apiLink)
      .then(res => res.json())
      .then((json) => {
        const data = cleanData(json)
        return data
      })
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


function cleanData(data) {
  return data.map(nerd => {
    return {
      courseName: nerd.name,
      name: nerd.owner.login,
      description: nerd.description,
      avatar: nerd.owner.avatar_url,
      homepage: nerd.homepage,
      id: nerd.id,
      node_id: nerd.node_id,
      name: nerd.name,
      full_name: nerd.full_name,
      private: nerd.private,
      owner: nerd.owner,
      html_url: nerd.html_url,
      milestones_url: nerd.milestones_url,
      notifications_url: nerd.notifications_url,
      labels_url: nerd.labels_url,
      releases_url: nerd.releases_url,
      deployments_url: nerd.deployments_url,
      created_at: nerd.created_at,
      updated_at: nerd.updated_at,
      pushed_at: nerd.pushed_at,
      git_url: nerd.git_url,
      ssh_url: nerd.ssh_url,
      clone_url: nerd.clone_url,
      svn_url: nerd.svn_url,
      homepage: nerd.homepage,
      size: nerd.size,
      stargazers_count: nerd.stargazers_count,
      watchers_count: nerd.watchers_count,
      language: nerd.language,
      has_issues: nerd.has_issues,
      has_projects: nerd.has_projects,
      has_downloads: nerd.has_downloads,
      has_wiki: nerd.has_wiki,
      has_pages: nerd.has_pages,
      forks_count: nerd.forks_count,
      mirror_url: nerd.mirror_url,
      archived: nerd.archived,
      disabled: nerd.disabled,
      open_issues_count: nerd.open_issues_count
    }
  })
}



module.exports = Api