const fs = require('fs')
const path = require('path')
const gsjson = require('google-spreadsheet-to-json')
const { extractSheets } = require("spreadsheet-to-json");
const parser = require('simple-excel-to-json')


/**
 *
 * Converts Xlsx files to json give path to the file
 */
async function convertXlsxToJson(filePath) {
    try {

        let doc = await parser.parseXls2Json(filePath)

        return doc
    }
    catch (e) {
        return e
    }

}
 
module.exports = {
    convertXlsxToJson,
}
