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

/*
const spreadsheetKey = "17v-jZUsnU5Hl6l4GpOtd-cQ8maOMY8OMC5TYzmuUZPQ";
//const credentials = require("./client_id.json");

extractSheets(
    {
        spreadsheetKey
        // credentials
    },
    (err, data) => {
        if (err) {
            console.log("ERROR:", err);
        }
        console.log('Data', JSON.stringify({ err, data }, null, 2));
    }
);*/

/*

// optional custom format cell function
const formatCell = (sheetTitle, columnTitle, value) => value.toUpperCase();

extractSheets(
    {
        // your google spreadhsheet key
        //https://docs.google.com/spreadsheets/d/17v-jZUsnU5Hl6l4GpOtd-cQ8maOMY8OMC5TYzmuUZPQ/edit?usp=sharing
        spreadsheetKey: "17v-jZUsnU5Hl6l4GpOtd-cQ8maOMY8OMC5TYzmuUZPQ",
        // your google oauth2 credentials (optional for world-readable spreadsheets)
        //credentials: require("./google-generated-creds.json"),
        // optional: names of the sheets you want to extract
        //sheetsToExtract: ["Customers", "Invoices"],
        // optional: custom function to parse the cells
        formatCell: formatCell
    },
    function(err, data) {
        console.log("Customers: ", data);
        console.log("Invoices: ", data);
    }
);*/

module.exports = {
    convertXlsxToJson,
}