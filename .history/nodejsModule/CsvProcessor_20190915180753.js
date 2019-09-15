const path = require('path');
const fs = require('fs');

module.exports = class CsvProcessor {
    constructor(folderPath) {
        this.$csvPath = folderPath;
        this.jina = "amuleke";
    }
    getFileList($csvPath) {
        var $f = fs.readdirSync($csvPath);
        return $f.filter(el => /\.csv$/.test(el));
    }
    getFileHeader($filePath) {
        var $content = fs.readFileSync(this.$csvPath + '\\' + $filePath, 'utf8');
        var $lines = $content.split('\n');
        var $linecount = $lines.length - 1;
        var $midfile = Math.round($linecount / 2, 0);
        var $testline = $lines[$midfile];
        //remove line breaks and split by delimiter (comma)
        var $t = $testline.replace(/(\r\n|\n|\r)/gm, "");
        var $tt = $t.match(/(?:[^\,"]+|"[^"]*")+/g);
        // Get derived column count
        var $colCount = $tt.length;
        // get header row (check the first 10 lines)
        var $counter = 0;
        var $header = null;
        while ($counter < 10) {
            var $headertest = $lines[$counter];
            var $a = $headertest.replace(/(\r\n|\n|\r)/gm, "");
            var $aa = $a.match(/(?:[^\,"]+|"[^"]*")+/g);
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

    cleanUpHeader($header){
        if(typeof $header === 'object'|| typeof $header === 'array'){
            for(let i =0; i < $header.length; i++){
                var $coldata = $header[i];
                // trim to remove white spaces
                var $a = $coldata.trim();
                // change all to lowercase
                var $b = $a.toLowerCase();
                $header[i] = $b;
            }
            return $header;
        }
    }

    colMapping($header){
        var $list = [];
        if(typeof $header === 'object'|| typeof $header === 'array'){
            for(let i =0; i < $header.length; i++){
                if(this.isItemName($header[i])){
                    $list.push(i);
                    console.log($header[i]);
                }
            }
            return $list;
        }
    }

    isItemName($col){
        var $searchstring =new RegExp("/*service|description|desc|srv/");
        return $searchstring.test($col);
    }

    isPrice($col){}

    isHospitalID($col){}

    isCurrency($col){}
}
