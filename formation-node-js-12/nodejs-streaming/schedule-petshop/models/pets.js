const connection = require('../infrastructure/database/connection');
const uploadFiles = require('../infrastructure/files/uploadFiles');
class Pet{
    add(pet, response){
        const sql = "insert into pets set ?"
        
        uploadFiles(pet.image, pet.name, (error, newPath) => {
            const newPet = {name: pet.name, image: newPath}
            if(error){
                response.status(400).json({error});
            } else {
                connection.query(sql, newPet, (error) => {
                    if(error){
                        response.status(400).json();
                    } else {
                        response.status(201).json(newPet);
                    }
                });
            }
        });
    }
}

module.exports = new Pet();