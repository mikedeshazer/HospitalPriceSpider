const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');


function getFileList($csvPath){
    return fs.readdirSync($csvPath);
}
$f = getFileList($csvPath);
$xx = $f.filter(el => /\.txt$/.test(el));
console.log($xx);
//console.log(getFileList($csvPath));
