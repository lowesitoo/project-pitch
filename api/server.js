const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const cors = require('cors')

const fs = require('fs')
const path = require('path')

require('dotenv').config()

const ownersController = require('./controller/owners')
const petsController = require('./controller/pets')
const doctorsController = require('./controller/doctors')
const vaccinesController = require('./controller/vaccines')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const customCss = fs.readFileSync(process.cwd() + '/swagger.css', 'utf8')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './ui/build/')))

// let express to use this
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { customCss })
)

app.use(bodyParser.json())

app.get('/api/owners', (req, res) => {
    ownersController.getOwners().then((data) => res.json(data))
})

app.post('/api/owners', (req, res) => {
    ownersController.createOwners(req.body.owner).then((data) => res.json(data))
})

app.put('/api/owners', (req, res) => {
    console.log('this is the api endpoint req body', req.body)
    ownersController.updateOwners(req.body.owner).then((data) => res.json(data))
})

app.delete('/api/owners/:id', (req, res) => {
    ownersController.deleteOwners(req.params.id).then((data) => res.json(data))
})

// Pets
app.get('/api/pets', (req, res) => {
    petsController.getPets().then((data) => res.json(data))
})

app.post('/api/pets', (req, res) => {
    petsController.createPets(req.body.pet).then((data) => res.json(data))
})

app.put('/api/pets', (req, res) => {
    petsController.updatePets(req.body.pet).then((data) => res.json(data))
})

app.delete('/api/pets/:id', (req, res) => {
    petsController.deletePets(req.params.id).then((data) => res.json(data))
})

// Doctors
app.get('/api/doctors', (req, res) => {
    doctorsController.getDoctors().then((data) => res.json(data))
})

app.post('/api/doctors', (req, res) => {
    doctorsController
        .createDoctors(req.body.doctor)
        .then((data) => res.json(data))
})

app.put('/api/doctors', (req, res) => {
    doctorsController
        .updateDoctors(req.body.doctor)
        .then((data) => res.json(data))
})

app.delete('/api/doctors/:id', (req, res) => {
    doctorsController
        .deleteDoctors(req.params.id)
        .then((data) => res.json(data))
})

// Vaccines

app.get('/api/vaccines', (req, res) => {
    vaccinesController.getVaccines().then((data) => res.json(data))
})

app.post('/api/vaccines', (req, res) => {
    vaccinesController
        .createVaccines(req.body.vaccine)
        .then((data) => res.json(data))
})

app.put('/api/vaccines', (req, res) => {
    vaccinesController
        .updateVaccines(req.body.vaccine)
        .then((data) => res.json(data))
})

app.delete('/api/vaccines/:id', (req, res) => {
    vaccinesController
        .deleteVaccines(req.params.id)
        .then((data) => res.json(data))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'))
})

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`)
})
