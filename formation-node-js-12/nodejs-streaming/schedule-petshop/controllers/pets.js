const Pet = require('../models/pets');

module.exports = app => {
    app.post('/pets', (request, response) => {
        const pet = request.body;

        Pet.add(pet, response);
    });
}