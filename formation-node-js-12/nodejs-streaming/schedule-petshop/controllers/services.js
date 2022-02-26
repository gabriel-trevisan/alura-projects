const Service = require('../models/services');

module.exports = app => {
    app.get('/services', (request, response) => {
        Service.list(response);
    })

    app.get('/services/:id', (request, response) => {
        const id = parseInt(request.params.id);

        Service.findById(id, response);
    });

    app.post('/services', (request, response) => {
        const service = request.body;
        
        Service.add(service).then((serviceAdded) => {
            response.status(201).json(serviceAdded);
        }).catch((error) => response.status(400).json(error));
    });
    
    app.patch('/services/:id', (request, response) => {
        const id = parseInt(request.params.id);
        const valores = request.body;

        Service.update(id, valores, response);
    })

    app.delete('/services/:id', (request, response) => {
        const id = parseInt(request.params.id);

        Service.delete(id, response);
    })
}