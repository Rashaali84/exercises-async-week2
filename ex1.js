const fetch = require("node-fetch");
const title = 'exercise 1';
const start = Date.now();
const assertMsg = (name) => `${title}, ${Date.now() - start} ms., ${name}`;
const url = 'https://jsonplaceholder.typicode.com/photos/';

console.log(title + ', fetching:', url);

fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(assertMsg('requested data:'), data);
        // write me
        let foundElemnt;
        data.forEach(function (element, index) {
            if (element.title === 'error magni fugiat dolorem impedit molestiae illo ullam debitis') {
                console.log('found', element);
                foundElemnt = element;
            }
        });
        return foundElemnt;
    })
    .then(photo => {
        const test1 = photo.title === 'error magni fugiat dolorem impedit molestiae illo ullam debitis';
        console.log(photo);
        console.assert(test1, assertMsg('Test 1'));
    })
    .catch(err => console.error(err));

//npm i node-fetch --save