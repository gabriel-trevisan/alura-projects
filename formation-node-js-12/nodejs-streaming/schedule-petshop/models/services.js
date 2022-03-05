const moment = require('moment');

const connection = require('../infrastructure/database/connection');
const serviceRepository = require('../repositories/service');

class Service {
    constructor(){
        this.isValidDate = ({date, creationDate}) => moment(date).isSameOrAfter(creationDate);

        this.isValidaNameCustomer = ({size}) => size >= 5;

        this.validate = parameters => 
            this.validations.filter(field => {
                const {name} = field;
                const parameter = parameters[name]
                return !field.validation(parameter)
            });

        this.validations = [
            {
                "name": "date",
                "validation": this.isValidDate,
                "message": "The date must be greater than the current date."
            },
            {
                "name": "customer",
                "validation": this.isValidaNameCustomer,
                "message": "The name must be greater than or equal to 5 characters."
            }
        ];
    }
    list(){
        return serviceRepository.list();
    }
    findById(id){
        return serviceRepository.findById(id);
    }
    add(service){
        const creationDate = moment().format("YYYY-MM-DD");
        const date = moment(service.date, 'DD/MM/YYYY').format("YYYY-MM-DD");

        const parameters = {
            date: {date, creationDate},
            customer: {size: service.customer.length}
        }

        const errorsFinded = this.validate(parameters);

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
    update(id, values){
        if(values.date){
            values.date = moment(values.date, 'DD/MM/YYYY').format('YYYY-MM-DD')
        }

        return serviceRepository.update(values, id);
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