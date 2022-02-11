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
        const services = request.body;
        
        Service.add(services, response);
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