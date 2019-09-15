const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');
var $filedata



function readFileData($error,$content){
    if($error){ 
        console.log(err);
        return
    }
    var tlines = $content.split('\n').length-1;
            console.log(tlines);
            if(tlines < 500){
                var $lines = $content.split('\n');
                $lines.forEach($line => {
                    console.log($line);
                });
            }
}

$d = fs.readdir($csvPath,function(err,files){
    if(err){
        return console.log('Unable to scan directory: '+err);
    }
    files.forEach(function(file){
        console.log(file);
        var $d;
        //$d = await fs.readFile($csvPath+'\\'+file); //,readFileData(err,$content));
        var data = fs.readFileSync($csvPath+'\\'+file,'utf8');
        console.log(data);
    });
});

