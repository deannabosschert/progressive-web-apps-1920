const fetch = require('node-fetch')

const endpoint = "https://api.github.com/"
// const course = "/web-app-from-scratch-"
// const year = "1920"
const limit = "50"
// const repo = `${course}${year}`
// const apiLink = `${endpoint}/repos${owner}${repo}?per_page=${limit}`
const Api = {
  get(route, repo) {
    const query = getQuery(route, repo)
    const apiLink = `${endpoint}${query}?per_page=${limit}`
    // console.log(apiLink)
    return fetch(apiLink)
      .then(res => res.json())
      .then((json) => {
        // console.log(json[0])
        // const data = cleanData(json)
        return json
      })
      .catch(err => {
        console.log(err)
      })
  }
}

//
// function getOwner(route) {
//   if (route === "overview") {
//     const owner = "cmda-minor-web"
//     return owner
//   } else if (route === "/") {
//     const owner = "cmda-minor-web"
//     return owner
//   } else {
//     const owner = `${route}`
//     return owner
//   }
// }

function getQuery(route, repo) {
  if (route === "home") {
    const query = "users/cmda-minor-web/repos"
    return query
  } else if (route === "course") {
    const query = `repos/cmda-minor-web/${repo}/forks`
    // console.log(query)
    return query
  } else if (route === "nerdProfile") {
    const query = `users/${repo}/repos`
    // console.log(query)
    return query
  } else {
    const query = `repos/${route}/${repo}`
    // console.log(query)
    // GET / repos /: owner /: repo
    // https: //api.github.com/users/aaraar/undefined?per_page=50

    return query
  }
}



//
// function getTag(route) {
//   if (route === "overview") {
//     const tag = "/forks"
//     return tag
//   } else if (route === "/") {
//     const owner = ""
//     return owner
//   } else {
//     const tag = ""
//     return tag
//   }
// }



function cleanData(results) {
  console.log("test")
  const data = results.map(result => ({
    courseName: result.name,
    name: result.owner.login,
    description: result.description,
    avatar: result.owner.avatar_url,
    homepage: result.homepage,
    id: result.id,
    node_id: result.node_id,
    full_name: result.full_name,
    private: result.private,
    owner: result.owner,
    html_url: result.html_url,
    milestones_url: result.milestones_url,
    notifications_url: result.notifications_url,
    labels_url: result.labels_url,
    releases_url: result.releases_url,
    deployments_url: result.deployments_url,
    created_at: result.created_at,
    updated_at: result.updated_at,
    pushed_at: result.pushed_at,
    git_url: result.git_url,
    ssh_url: result.ssh_url,
    clone_url: result.clone_url,
    svn_url: result.svn_url,
    homepage: result.homepage,
    size: result.size,
    stargazers_count: result.stargazers_count,
    watchers_count: result.watchers_count,
    language: result.language,
    has_issues: result.has_issues,
    has_projects: result.has_projects,
    has_downloads: result.has_downloads,
    has_wiki: result.has_wiki,
    has_pages: result.has_pages,
    forks_count: result.forks_count,
    mirror_url: result.mirror_url,
    archived: result.archived,
    disabled: result.disabled,
    open_issues_count: result.open_issues_count
  }))

  return data
}




module.exports = Api