//create a database connection with sequelize and mysql and test it
//import the sequelize library
const Sequelize = require('sequelize');

//create a new sequelize instance
const sequelize = new Sequelize('artroom', 'root', 'Skarskar15995', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

//test the connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}
).catch(err => {
    console.error('Unable to connect to the database:', err);
}
);

//insert a new row into the database table usuarios
sequelize.query('INSERT INTO usuarios (email, senha) VALUES ("renan", "123")', { type: sequelize.QueryTypes.INSERT }).then(() => {
    console.log('Row inserted successfully.');
}
).catch(err => {
    console.error('Unable to insert row:', err);
}
);

//export the connection
module.exports = sequelize;