
// Function that sorts an array by stargazers_count
export function sortArrayByStargazersCount(array) {
    return array.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1)
}

// Function that removes spaces from string
export function removeSpacesFromString(str){
    return str.replace(/\s/g, '');
}

