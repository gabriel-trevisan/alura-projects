const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/database/connection');
const Tables = require('./infrastructure/database/tables');

connection.connect(function(error){
    if(error)
        console.log('Error connection with database');
    else {
        console.log('Success connection with database');

        Tables.init(connection);

        const app = customExpress();

        app.listen(3000);
    }

});