// this folder requires contents of env file (URI of database)
require ("dotenv").config();
// pull in class constructor on sequelize (spec method)
const { Sequelize } = require ("sequelize");

// Sequelize takes a connection URI, creates a connection that can be used throughout app 
// nb. can't open connection and leave it open like you can in Mongoose, but can use Sequlize constant anywhere in app to affect database
exports.sequelize = new Sequelize(process.env.MYSQL_URI);

// this file is not opening a connection - it is creating a connection that can be opened later in app 
