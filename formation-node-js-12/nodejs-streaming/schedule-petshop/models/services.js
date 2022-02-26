const moment = require('moment');

const connection = require('../infrastructure/database/connection');
const serviceRepository = require('../repositories/service');

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
    add(service){
        const creationDate = moment().format("YYYY-MM-DD");
        const date = moment(service.date, 'DD/MM/YYYY').format("YYYY-MM-DD");

        const isValidDate = moment(date).isSameOrAfter(creationDate);

        const isValidaNameCustomer = service.customer.length >= 5;

        const validations = [
            {
                "field": "date",
                "validation": isValidDate,
                "message": "The date must be greater than the current date."
            },
            {
                "field": "nome",
                "validation": isValidaNameCustomer,
                "message": "The name must be greater than or equal to 5 characters."
            }
        ];

        const errorsFinded = validations.filter(field => !field.validation);

        const existErros = errorsFinded.length > 0

        if(existErros){
            return new Promise((resolve, reject) => reject(errorsFinded));
        } else {

            const serviceWithDates = {...service, creationDate, date};

            return serviceRepository.add(serviceWithDates).then((result) => {
                const id = result.insertId;
                return new Promise((resolve) => {
                    resolve({ ...service, id})
                });
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