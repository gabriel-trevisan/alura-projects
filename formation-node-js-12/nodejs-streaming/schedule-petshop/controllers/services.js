const Service = require('../models/services');

module.exports = app => {
    app.get('/services', (request, response) => {
        Service.list().then(services => {
            response.json(services);
        }).catch(error => {
            response.status(400).json(error);
        });
    })

    app.get('/services/:id', (request, response) => {
        const id = parseInt(request.params.id);

        Service.findById(id).then(service => {
            response.json(service);
        }).catch(error => response.status(400).json(error));
    });

    app.post('/services', (request, response) => {
        const service = request.body;
        
        Service.add(service).then((serviceAdded) => {
            response.status(201).json(serviceAdded);
        }).catch((error) => response.status(400).json(error));
    });
    
    app.patch('/services/:id', (request, response) => {
        const id = parseInt(request.params.id);
        const values = request.body;

        Service.update(id, values).then(service => {
            response.json(service);
        }).catch(error => response.status(400).json(error));
    })

    app.delete('/services/:id', (request, response) => {
        const id = parseInt(request.params.id);

        Service.delete(id).then(service => {
            response.json(service);
        }).catch(error => response.status(400).json(error));
    })
}