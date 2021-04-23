const url = 'https://api.github.com/users';
const REPOS_PAGE_SIZE = 30;

// Basic fetch function to retrive specified user data
export function getUserData(user){
  let changeableUrl = url;

  if(user){
    changeableUrl = `${url}/${user}`;
  }

  return fetch(changeableUrl).then(data => data.json());
}

// Basic fetch function to retrive specified user repositories
export async function getAllRepos(user, reposCount){
  const results = [];
  const pagesCount = Math.ceil(reposCount / REPOS_PAGE_SIZE)

  for (let i = 1; i <= pagesCount; i++) {
    const response = await fetch(`${url}/${user}/repos?page=${i}`)
    
    results.push(...(await response.json()));
  }

  return results;
}