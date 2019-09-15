const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');


function getFileList($csvPath){
    var $f = fs.readdirSync($csvPath);
    return $f.filter(el => /\.csv$/.test(el));
}
console.log(getFileList($csvPath));
