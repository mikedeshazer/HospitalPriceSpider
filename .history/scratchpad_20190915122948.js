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
    // var $t = $testline.split(/(?:[^\,"]+|"[^"]*")+/g);
    //remove line breaks and split by delimiter (comma)
    $t=$testline.replace(/(\r\n|\n|\r)/gm, "");
    var $tt = $t.match(/(?:[^\,"]+|"[^"]*")+/g);
    // Get derived column count
    var $colCount = $tt.length;    
    // get header row (check the first 10 lines)
    var $counter = 0;

    while($counter < 10){
        var $headertest = $lines[$counter];
        $a=$headertest.replace(/(\r\n|\n|\r)/gm, "");
        $aa = $a.match(/(?:[^\,"]+|"[^"]*")+/g);

        if($aa.length === $colCount){
            //this is it
            console.log($aa);
            break;
        }

        $counter++;
    }
    
});
