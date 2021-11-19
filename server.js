const express = require('express');
const path = require('path');
const randomId = require('random-id');
var cors = require('cors')
var uuid = require('uuid');

const app = express(),
      bodyParser = require("body-parser");
      // port = 3080;

// place holder for the data
const users = [];
const books = [];
const bookIds = [];
app.use(cors())

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './my-app/build')));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});
app.get('/:id', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});
app.get('/:id/:data', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});
app.get('/:id/:data/:test', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.get('/api/books', (req, res) => {
  console.log('api/bokks called!!!!!!!')
  res.json(books);
});

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(users);
});
app.get('/api/book/:id', (req, res) => {
  var index = bookIds.indexOf(req.params.id);
  if (index !== -1) {
    res.json({data: books[index], message: 'books list'});
  }else{
    res.status(400).json({message: "book not found"});
  }
});
app.put('/api/book/:id', (req, res) => {
  var index = bookIds.indexOf(req.params.id);
  if (index !== -1) {
    const book = req.body;
    book._id = req.params.id
    books[index] = book
    res.json("book edited");
    // res.json({data: books[index], message: 'books list'});
  }else{
    res.status(400).json({message: "book not found"});
  }
});
app.delete('/api/book/:id', (req, res) => {
  var index = bookIds.indexOf(req.params.id);
  if (index !== -1) {
    books.splice(index, 1);
    bookIds.splice(index, 1);
    // res.json("book edited");
    res.json({data: [], message: 'book deleted successfully'});
  }else{
    res.status(400).json({message: "book not found"});
  }
});
app.post('/api/book', (req, res) => {
  const book = req.body;
  book._id = randomId(10);
  console.log('Adding book:::::', book);
  bookIds.push(book._id);
  books.push(book);
  res.json("book addedd");
});


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on the port::5000`);
});