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
    var $lines = $content.split('\n');
    var $linecount = $lines.length-1;
    var $midfile = Math.round($linecount/2,0);
    var $testline = $lines[$midfile];
    var $t = $testline.split(/(?:[^\,"]+|"[^"]*")+/g);
    //var $t = $testline.match(/(?:[^\,"]+|"[^"]*")+/g) ;
    console.log($testline);
    console.log($t);
    //});    
});
