const GoogleSpreadsheet = require('google-spreadsheet');
//var async = require('async');
const { promisify } = require('util')


async function printStudent(student) {
    console.log(`Name: ${student.studentname}`)
    console.log(`Major: ${student.major}`)
    console.log(`Home State: ${student.homestate}`)
    console.log(`---------------------------------`)
}

/**
 * Should return the data in the rows
 * if the spreadsheet id is legit
 */
async function getSpreadSheetData(spreadSheetId) {
    let credentials = require('../client_secret')// credentials file

    //console.log('Creds === ', credentials)

    const doc = new GoogleSpreadsheet(spreadSheetId) //file id

    await promisify(doc.useServiceAccountAuth)(credentials)
    const info = await promisify(doc.getInfo)()
    const sheet = info.worksheets[0]
    //console.log(sheet)

    const rows = await promisify(sheet.getRows)({
        offset: 1
        //offset: 5,
        //limit: 10,
        //orderby: 'homestate'// order by homestate alphabetcal order
    })
    //console.log('Rows.....', JSON.stringify(rows) ) // data
    //console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`)
    //rows.forEach(row => {
        //printStudent(row)
    //})

    return JSON.stringify(rows)
}

/**
 * converts rows data to json data
 */
async function spreadSheetDataToJson(spreadSheetId){

}

module.exports = {
    getSpreadSheetData
}