const fs = require('fs');

// const book = {
//     title: 'title 1',
//     author: 'Author 1'
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedDate = JSON.parse(bookJSON);
// console.log(parsedDate.title);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer.toString());

const dataBuffer = fs.readFileSync('1-json.json');
const books = JSON.parse(dataBuffer.toString());

books.title = "Title 1";

const newBooks = JSON.stringify(books);
fs.writeFileSync('1-json.json', newBooks);
