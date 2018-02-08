require('dotenv').config();
const monk = require('monk');

// Connection URL
// const url = process.env.MONGODB_URI;
const url = 'localhost:27017/movie-app-development';

const db = monk(url);

db.then(() => {
  console.log('Connected correctly to server');
});

module.exports = {
  db,
};
