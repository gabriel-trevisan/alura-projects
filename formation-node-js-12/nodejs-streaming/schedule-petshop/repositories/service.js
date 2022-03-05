const query = require('../infrastructure/database/queries');

class Service {
    add(service){
        const sql = "insert into services set ?"

        return query(sql, service);
    }

    list(){
        const sql = "select * from services";

        return query(sql);
    }
}

module.exports = new Service();