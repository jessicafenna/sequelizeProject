const { DataTypes } = require("sequelize");
const { sequelize } = require ("../db/connection");

const TV = sequelize.define("TV", { 
    title: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true
    }, 
   
})
module.exports = TV;