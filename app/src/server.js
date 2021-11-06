const express = require('express');
const faker = require('faker')

const connection = require('./database');

const app = express();

app.get('/', (req, res) => {
  const fakerName = faker.name.findName();
  
  connection.query(`INSERT INTO persons (name) VALUES ('${fakerName}')`, (error, result, fields) => {
    console.log(error);
  });
  
  connection.query(
    'SELECT name FROM persons',
    (error, results, fields) => {
      console.log(error);

      res.send(`
        <h1>Hello FullCycle Rocks!</h1>
        <ul>
          ${!!results.length ? results.map(result => `<li>${result.name}</li>`) : ''}
        </ul>
      `)
    }
  );
})

app.listen(3000, () => console.log('Server is running on port 3333'));