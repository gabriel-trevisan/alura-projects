const express = require('express')
const app = new express()
const faker = require('faker')

app.use(express.json())

app.get('/:cpf', (request, response) => {
    const { cpf } = request.params

    response.status(200).json({
        cpf,
        nome: faker.name.findName(),
        dataDeNascimento: faker.date.past()
    })
})

app.listen(8082, () => console.log('Api running'))