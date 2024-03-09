const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','parabellum',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;
