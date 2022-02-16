module.exports = app => {
    app.post('/pets', (request, response) => {
        response.send('ok');
    });
}