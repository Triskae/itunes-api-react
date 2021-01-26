async function fetchItunes(searchValue) {
    if (searchValue) {
        const headers = new Headers();
        const params = {
            method: 'GET',
            headers: headers,
            cors: 'cors',
            cache: 'default',
            credentials: 'include',
        };
        const result = await fetch(`https://itunes.apple.com/search?term=${searchValue}&country=FR`, params);
        return await result.json();
    }
}

export default fetchItunes;
