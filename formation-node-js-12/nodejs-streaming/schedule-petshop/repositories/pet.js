const query = require('../infrastructure/database/queries')

class Pet {
    add(pet){
        const sql = "insert into pets set ?"

        return query(sql, pet);
    }    
}

module.exports = new Pet();