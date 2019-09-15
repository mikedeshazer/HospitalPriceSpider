const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');

$d = fs.readdirSync($csvPath);
console.log($d);
