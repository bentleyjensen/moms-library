const promise = require('bluebird');
const config = require('getconfig');

const initOptions = {
    promiseLib: promise //override default (ES6 Promise)
}

const pgp = require ('pg-promise')(initOptions);

//Set up connection
const cn = {
    host: config.db.host,
    port: config.db.port,
    database: config.db.database,
    user: config.db.user,
    password: config.db.password
}

const db = pgp(cn);

const query = "SELECT * FROM students"

db.any(query)
    .then((data) => {
        data.forEach((item)=>{
            console.log(item);
        });
    }).catch(error => {
      console.log('ERROR:\n',error);
    })
    .finally(db.$pool.end);

//module.exports(db);
