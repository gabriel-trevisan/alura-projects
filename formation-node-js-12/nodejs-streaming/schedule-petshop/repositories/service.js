const query = require('../infrastructure/database/queries');

class Service {
    add(service){
        const sql = "insert into services set ?"

        return query(sql, service);
    }
}

module.exports = new Service();