const path = require('path')
//const Joi = require('@hapi/joi')
const express = require('express')
//const uuid = require('uuid/v4')
const app = express()


const csvToJsonService = require('./services/csvToJson');


/**
 *@TODO tests the api returns json data with fields unmatched
 */
async function testingConvert() {
    const csvFilePath = path.join(__dirname, 'rawCSVs','McLean_Hospital.csv')
     const data = await csvToJsonService.getJsonFromCsv(csvFilePath)

    console.log('Data....Dataaa', data)
    return data
}


app.use(express.json())

app.get('/api/test', async (req, res) => {
    const data =  await testingConvert()
    //console.log('data sendind...', data)
    res.send(data)
})

/*
const prices = [
    { id: 1, name: 'consultation fee'},
    { id: 2, name: ' fee'},
    { id: 3, name: 'antibiotics'},
    { id: 4, name: 'ultrasound'},
    { id: 5, name: 'vaccine'},
]

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api/prices', (req, res) => {
    res.send(prices)
})

app.get('/api/prices/:id', (req, res) => {
  const price = prices.find( p => p.id === parseInt(req.params.id))
    if (!price) res.status(404).send('The prices for the given amount is not in record') // return no found 404
    res.send(price)
})

app.post('/api/prices', (req, res) => {

    const result = validatePrice(req.body)

    if (result.error) {
        res.status(400).send(result.error.details[0].message) // Bad request
    }
    const price = {
        uuid: uuid(),
        id: prices.length+1,
        name: req.body.name
    }

    prices.push(price);
    res.send(price)
})

app.put('/api/prices/:id', (req, res) => {
    const price = prices.find( p => p.id === parseInt(req.params.id))
    if (!price) res.status(404).send('The prices for the given amount is not in record') // return no found 404

    const result = validatePrice(req.body)

    if (result.error) {
        res.status(400).send(result.error.details[0].message) // Bad request
    }

    price.name = req.body.name
    res.send(price)

})

app.delete('/api/courses/:id', (req, res) => {

})

function validatePrice(price) {

    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(price, schema)
}
*/
const port = process.env.PORT || 3007;
app.listen(port, () => {
    console.log('listening to port....# ', port)
})