async function fetchItunes(searchValue) {
    if (searchValue) {
        const headers = new Headers();
        const params = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default'
        };
        const result = await fetch(`https://itunes.apple.com/search?term=${searchValue}`, params);
        return await result.json();
    }
}

export default fetchItunes;
