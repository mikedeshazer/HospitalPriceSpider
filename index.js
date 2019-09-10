/**
 * Servers as the express server
 */
const path = require('path')
const fs = require('fs')
const Joi = require('@hapi/joi')
const express = require('express')
const uuid = require('uuid/v4')
const cors = require('cors')
const app = express()

// allow cors for use with react app http://localhost:3000/ when using other render like react or vue on dev
app.use(cors())

const csvToJsonService = require('./services/csvToJson');

function availableCsvFiles() {
    const csvFolder = path.join(__dirname, 'rawCSVs')

    try {
        fs.readdir(csvFolder,  (err, files) => {
            if (err) console.log('Error', err)
            else console.log('Result', files)
            return files
        })
    } catch (e) {
        return e
    }
}

async function getFileData(filePath) {
    console.log('Filename === ',filePath)

    const data = await csvToJsonService.getJsonFromCsv(filePath)

    return data
}

/**
 *@TODO tests the api returns json data with fields unmatched
 */
async function testingConvert() {
    const csvFilePath = path.join(__dirname, 'rawCSVs','hospital_CPMC.csv')
    const data = await csvToJsonService.getJsonFromCsv(csvFilePath)

    return data
}

app.use(express.json())

/**
 * Get all available CSVs data files and return
 */
app.get('/api/csv-files', async (req, res) => {
    const csvFolder = path.join(__dirname, 'rawCSVs')

    try {
        fs.readdir(csvFolder,  (err, files) => {
            if (err) console.log('Error', err)
            else console.log('Result', files)
            //return files
            filesList = files.filter(function(e){
                return path.extname(e).toLowerCase() === '.csv'
            });
            //console.log(filesList);
            res.send(filesList)
        })
    } catch (e) {
        res.send(e)
    }

})

app.get('/api/csvdata/:id', async (req, res) => {
    const fileName = req.params.id
    const csvFilePath = path.join(__dirname, 'rawCSVs', fileName)
    console.log('fileName', fileName)
    const data =  await getFileData(csvFilePath)
    //console.log('data sendind...', data)
    res.send(data)
})

app.get('/api/test', async (req, res) => {
    const data =  await testingConvert()
    //console.log('data sendind...', data)
    res.send(data)
})

app.get('/', (req, res) => {
    res.send('Hello And welcome go to http://localhost:3007/api/csv-files , to view available csv files');
})


/*
const prices = [
    { id: 1, name: 'consultation fee'},
    { id: 2, name: ' fee'},
    { id: 3, name: 'antibiotics'},
    { id: 4, name: 'ultrasound'},
    { id: 5, name: 'vaccine'},
]

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

app.delete('/api/prices/:id', (req, res) => {

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