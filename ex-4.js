const fetch = require("node-fetch");
const title = 'exercise 4';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;
const url = 'https://jsonplaceholder.typicode.com/posts';

console.log(title + ', fetching:', url);
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(assertMsg('requested data:'), data);
        // write me!
        let resultsFound = [];
        data.forEach((el) => {
            if (el.body.includes('magnam'))
                resultsFound.push(el);

        });
        return resultsFound.slice(0, 14);
    })
    .then(filteredPosts => {
        const test1 = filteredPosts.length === 14;
        const test2 = filteredPosts.every(post => post.body.includes('magnam'));
        console.assert(test1, assertMsg('Test 1'));
        console.assert(test2, assertMsg('Test 2'));
    })
    .catch(err => console.error(err));
