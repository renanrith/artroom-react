import "./connection"; //import the connection
import {sequelize} from "./connection";

//insert a new row into the database table usuarios
sequelize.query('INSERT INTO usuarios (email, senha) VALUES ("kaua", "123")', { type: sequelize.QueryTypes.INSERT }).then(() => {
    console.log('Row inserted successfully.');
}
).catch(err => {
    console.error('Unable to insert row:', err);
}
);