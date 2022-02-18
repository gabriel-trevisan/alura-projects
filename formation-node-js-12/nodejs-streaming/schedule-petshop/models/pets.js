const connection = require('../infrastructure/connection');

class Pet{
    add(pet, response){
        const sql = "insert into pets set ?"
        connection.query(sql, pet, (error) => {
            if(error){
                response.status(400).json();
            } else {
                response.status(201).json(pet);
            }
        });
    }
}

module.exports = new Pet();