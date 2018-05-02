'use scrict';

const config = require("getconfig");
const Promise = require("bluebird");

const pgopts = {
    promiseLib: Promise
};

const pgp = require("pg-promise")(pgopts);

const dbOpts = config.pg.connection;

const db = pgp(dbOpts);

module.exports = {
    db
};
