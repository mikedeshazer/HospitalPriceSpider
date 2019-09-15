const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');
const CsvProcessor = require('./nodejsModule/CsvProcessor.js');
const $xx = new CsvProcessor($csvPath);

$list = $xx.getFileList($csvPath);
$list.forEach($file => {
    $header = $xx.getFileHeader($file);
    $cleanheader = $xx.cleanUpHeader($header);
    $map = $xx.colMapping($cleanheader);

    console.log($map);
});

