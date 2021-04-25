const url = 'https://api.github.com/users';
const REPOS_PAGE_SIZE = 30;

// Basic fetch function to retrive specified user data
export async function getUserData(user){
  let changeableUrl = url;

  if(user) changeableUrl = `${url}/${user}`;

  const response = await fetch(changeableUrl);
  
  if(!response.ok) throw new Error(response.status);

  return response.json()
}


// Basic fetch function to retrive specified user repositories
// Github API by default returns only 30 repositories at once.
// This function gets users repo count and later divie it by
// 30 to get all of the user repo pages.
export async function getAllRepos(user, reposCount){
  const results = [];
  const pagesCount = Math.ceil(reposCount / REPOS_PAGE_SIZE)

  for (let i = 1; i <= pagesCount; i++) {
    const response = await fetch(`${url}/${user}/repos?page=${i}`);

    if(!response.ok) throw new Error(response.status);
    
    results.push(...(await response.json()));
  }

  return results;
}