async function fetchItunes (searchValue) {
    if (searchValue) {
        const result = await fetch(`https://itunes.apple.com/search?term=${searchValue}`);
        return await result.json();
    }
}

export default fetchItunes;
