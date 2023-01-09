const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

require('dotenv').config()

const ownersController = require('./controller/owners')

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
    console.log(req.body)
    ownersController
        .createOwners(req.body.owners)
        .then((data) => res.json(data))
})

app.put('/api/owners', (req, res) => {
    ownersController
        .updateOwners(req.body.owners)
        .then((data) => res.json(data))
})

app.delete('/api/owners/:id', (req, res) => {
    ownersController.deleteOwners(req.params.id).then((data) => res.json(data))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'))
})

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`)
})
