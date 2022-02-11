const moment = require('moment');

const connection = require('../infrastructure/connection');

class Service {
    list(response){
        const sql = "select * from services"

        connection.query(sql, (error, result) => {
            if(error){
                response.status(400).json(error);
            } else {
                response.status(200).json(result);
            }
        })
    }
    findById(id, response){
        const sql = "select * from services where id = ?"

        connection.query(sql, id, (error, result) => {
            const services = result[0];
            if(error){
                response.status(400).json(error);
            } else {
                response.status(200).json(services);
            }
        });
    }
    add(services, response){
        const creationDate = moment().format("YYYY-MM-DD");
        const date = moment(services.date, 'DD/MM/YYYY').format("YYYY-MM-DD");

        const isValidDate = moment(date).isSameOrAfter(creationDate);

        const isValidaNameCustomer = services.customer.length >= 5;

        const validations = [
            {
                "campo": "date",
                "validacao": isValidDate,
                "mensagem": "The date must be greater than the current date."
            },
            {
                "campo": "nome",
                "validacao": isValidaNameCustomer,
                "mensagem": "The name must be greater than or equal to 5 characters."
            }
        ];

        console.log(validations);

        const errorsFinded = validations.filter(campo => !campo.validacao);

        const existErros = errorsFinded.length > 0

        if(existErros){
            response.status(400).json(errorsFinded);
        } else {

            const servicesWithDates = {...services, creationDate, date};

            const sql = "insert into services set ?"

            connection.query(sql, servicesWithDates, (error, result) => {
                if(error){
                    response.status(400).json(error);
                } else {
                    response.status(201).json(services);
                }
            });
        }
    }
    update(id, values, response){
        if(values.date){
            values.date = moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }

        const sql = "update services set ? where id = ?";
        connection.query(sql, [values, id], (error, result) => {
            if(error){
                response.status(400).json(error);
            } else {
                response.status(200).json({...values, id});
            }
        })
    }
    delete(id, response){
        const sql = "delete from services where id = ?";

        connection.query(sql, id, (error, result) => {
            if(error){
                response.status(400).json(error);
            } else {
                response.status(200).json({id});
            }
        })
    }
}

module.exports = new Service();