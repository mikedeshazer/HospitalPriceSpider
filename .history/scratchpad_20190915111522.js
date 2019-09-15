const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');


function getFileList($csvPath){
    var $f = fs.readdirSync($csvPath);
    return $f.filter(el => /\.csv$/.test(el));
}
$f = getFileList($csvPath);

$f.forEach($file => {
    //$lines.forEach($line => {
    var $content = fs.readFileSync($csvPath+'\\'+$file,'utf8');
    console.log($content);
    //});    
});
