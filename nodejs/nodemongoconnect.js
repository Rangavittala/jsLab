/* nodejs mongodb connection code 
The current project will expect to have the following version standards
    node     - 1v12.14.1
    npm      - 6.13.4
    nvm      - 0.34.0
    mongodb  - MongoDB shell version v4.2.2
*/
/* author: RangaVittala SR */

/* Steps needed to be followed 
  -> Please make sure you have installed VScode editor on your machine
  -> install the latest version of nodejs and mongodb by moving to the 
      respective websites and your machine specifications
  -> install npm, nvm packages
  -> create a directory mongodb-nodejs-project
  -> cd mongodb-nodejs-project
  -> execute the command npm init inside the directory which creates a file called package.json
  -> To install the required packaes follow the below steps   
/* pakages need to be installed inside the directory- (node pakages)
    express
    mongoose
    body-parser
    express-handlebar
    nodemon
*/
// copy the code below and paste on to the terminal
// npm install --save express express-handlebars mongoose body-parser nodemon
// It will create a directory called node_modules, package-lock.json file and 
// it will update the package.json file

// -- After typing the folowing code go to pakage.json file 
//      find the object script, below the test key  add the folowing line of code
//       "start": "nodemon index.js"
//        execute(run through the terminal) - npm start

// connection code starts now
// import the mongoose package using require() function and assign it to a variable constant
const mongoose = require('mongoose');

// We need to difine the URL
// use the constant to conect the mongodb server
// using .connect() fuction provide the url for mongodb server
// syntax - "mongodb://<localhost address or loopback address>/<databsename>"
const URL =  'mongodb://127.0.0.1:27017/firstDatabase';

// mongoose.set('useCreateIndex', true);

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
// mongoose.set('useFindAndModify', false);

//Connection establishment
mongoose.connect(URL, {
    useNewUrlParser: true, // url string parser
    useCreateIndex: true, // automatic index
    useUnifiedTopology: true, // for new bdserver
    useFindAndModify: false
});
//Models
// require('../model/user');
const db = mongoose.connection;

//We enebled the Listener
db.on('error', () => {
    console.error('Error occured in db connection');
});

db.once('open', () => {
    console.log('DB Connection established successfully');
});