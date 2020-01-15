export function getAllStarShips() {
    const endpoint = 'https://swapi.co/api/starships/';
    return fetch(endpoint).then(res => res.json());
}