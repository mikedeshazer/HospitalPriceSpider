const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');

class CsvProcessor {
    constructor() {
        this.$csvPath = path.join(__dirname, 'rawCSVs');
        this.jina = "amuleke";
    }
    getFileList($csvPath) {
        var $f = fs.readdirSync($csvPath);
        return $f.filter(el => /\.csv$/.test(el));
    }
    getFileHeader($filePath) {
        var $content = fs.readFileSync($csvPath + '\\' + $filePath, 'utf8');
        var $lines = $content.split('\n');
        var $linecount = $lines.length - 1;
        var $midfile = Math.round($linecount / 2, 0);
        var $testline = $lines[$midfile];
        //remove line breaks and split by delimiter (comma)
        $t = $testline.replace(/(\r\n|\n|\r)/gm, "");
        var $tt = $t.match(/(?:[^\,"]+|"[^"]*")+/g);
        // Get derived column count
        var $colCount = $tt.length;
        // get header row (check the first 10 lines)
        var $counter = 0;
        var $header = null;
        while ($counter < 10) {
            var $headertest = $lines[$counter];
            $a = $headertest.replace(/(\r\n|\n|\r)/gm, "");
            $aa = $a.match(/(?:[^\,"]+|"[^"]*")+/g);
            if ($aa !== null && $aa.length === $colCount) {
                //this is it
                //console.log($aa);
                $header = $aa;
                break;
            }
            $counter++;
        }
        //do some cleanup (trim/remove whitespace and special chars)
        return $header;
    }
}

const $xx = new CsvProcessor();
$xx.getFileList($csvPath);

/*
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
            //console.log($aa);
            $header = $aa;
            break;
        }

        $counter++;
    }
    //do some cleanup (trim/remove whitespace and special chars)
    return $header;
}
*/
//$f = getFileList($csvPath);
/*
$f.forEach($file => {

    $dd = getFileHeader($file);
    console.log($dd);
    
});
*/
