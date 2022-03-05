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
    findById(id){
        const sql = "select * from services where id = ?"

        return query(sql, id);
    }
    update(values, id){
        const sql = "update services set ? where id = ?";

        return query(sql, [values, id]);
    }
}

module.exports = new Service();