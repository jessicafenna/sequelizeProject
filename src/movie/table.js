const { DataTypes } = require("sequelize");
// this before db needs two dots (one dot throws cannot find module error) - check 
const { sequelize } = require ("../db/connection");

// defined table in Movie 
const Movie = sequelize.define("Movie", {
    title: { 
        type: DataTypes.STRING,
        // by default allowNull is true - you don't have to be information in there
        allowNull: false,
        unique: true,
    }, 
    actor: { 
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    }
});

module.exports = Movie;

