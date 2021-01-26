async function fetchItunes(searchValue) {
    if (searchValue) {
        const headers = new Headers({
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json"
        });
        const params = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default',
            credentials: 'include',
        };
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${searchValue}&country=FR&media=music`, params);
        return await result.json();
    }
}

export default fetchItunes;
