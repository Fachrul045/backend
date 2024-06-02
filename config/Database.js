import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db','root','tcc',{
    host: "34.34.216.141",
    dialect: "mysql"
});

export default db;