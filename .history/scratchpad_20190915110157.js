const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');


function getFileList($csvPath){
    return fs.readdirSync($csvPath);
}

console.log(getFileList($csvPath));
