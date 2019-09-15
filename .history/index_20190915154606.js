const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');
const CsvProcessor = require('./nodejsModule/CsvProcessor.js');
const $xx = new CsvProcessor();

$c = $xx.getFileList($csvPath);
console.log($c);

