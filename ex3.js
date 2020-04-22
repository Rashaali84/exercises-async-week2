const fetch = require("node-fetch");
const title = 'exercise 3';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;
const url = 'https://jsonplaceholder.typicode.com/albums';

console.log(title + ', fetching:', url);
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(assertMsg('requested data:'), data);
        // write me!
        var foundResults = [];
        data.forEach((element) => {
            if (element.userId === 9)
                foundResults.push(element);
        });
        return foundResults.slice(0, 10);
    })
    .then(albums => {
        const test1 = albums.length === 10;
        const test2 = albums.every(album => album.userId === 9);
        console.assert(test1, assertMsg('Test 1'));
        console.assert(test2, assertMsg('Test 2'));
    })
    .catch(err => console.error(err));
