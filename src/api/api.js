const url = 'https://api.github.com/users';


export function getUserRepos(user){
  let changeableUrl = url;

  if(user) {
    changeableUrl = `${url}/${user}/repos`;
  }

  return fetch(changeableUrl).then(data => data.json());
}

export function getUserData(user){
  let changeableUrl = url;

  if(user){
    changeableUrl = `${url}/${user}`;
  }

  return fetch(changeableUrl).then(data => data.json());
}

export function getList() {
  return fetch(url)
    .then(data => data.json())
}
