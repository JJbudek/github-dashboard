export function sortArrayByStargazersCount(array) {
    return array.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1)
}