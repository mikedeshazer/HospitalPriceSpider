const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');


function getFileList($csvPath){
    var $f = fs.readdirSync($csvPath);
    return $f.filter(el => /\.csv$/.test(el));
}

function getFileHeader($filePath){
    var $content = fs.readFileSync($csvPath+'\\'+$filePath,'utf8');
    var $lines = $content.split('\n');
    var $linecount = $lines.length-1;
    var $midfile = Math.round($linecount/2,0);
    var $testline = $lines[$midfile];
    //remove line breaks and split by delimiter (comma)
    $t=$testline.replace(/(\r\n|\n|\r)/gm, "");
    var $tt = $t.match(/(?:[^\,"]+|"[^"]*")+/g);
    // Get derived column count
    var $colCount = $tt.length;    
    // get header row (check the first 10 lines)
    var $counter = 0;
    var $header = null;
    while($counter < 10){
        var $headertest = $lines[$counter];
        $a=$headertest.replace(/(\r\n|\n|\r)/gm, "");
        $aa = $a.match(/(?:[^\,"]+|"[^"]*")+/g);

        if($aa !==null && $aa.length === $colCount){
            //this is it
            console.log($aa);
            $header = $aa;
            break;
        }

        $counter++;
    }
    return $header;
}
$f = getFileList($csvPath);

$f.forEach($file => {

    $dd = getFileHeader($file);
    console.log($dd);
    /*
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

        if($aa !==null && $aa.length === $colCount){
            //this is it
            console.log($aa);
            break;
        }

        $counter++;
    }
    */
});
