const connection = require('./connection');

const executeQuery = (sql, parameters = '') => {
    return new Promise((resolve, reject) => {
        connection.query(sql, parameters, (error, result) => {
            if(error){
                reject(error);
            } else {
                resolve(result);
            }
        })
    });
}

module.exports = executeQuery;