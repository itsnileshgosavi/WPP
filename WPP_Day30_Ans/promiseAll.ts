const fetchMultiplePosts = async () => {
    const postUrls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
    ].map(url =>
        fetch(url).then(response => response.json())
    );

    const posts = await Promise.all(postUrls);

    return posts;
};

fetchMultiplePosts().then((res) => console.log(res));