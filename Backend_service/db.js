
const { MongoClient } = require('mongodb');

let dbConnection;
module.exports = {
    connectionToDb: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/Farmers')
            .then((client) => {
                dbConnection = client.db();
                console.log("connected to the db");
                return cb();
            })
            .catch((err) => {
                console.log({ err: "error ocured in connecting to the db" });
                return cb(err)
            })
    },
    getDb: () => dbConnection

}