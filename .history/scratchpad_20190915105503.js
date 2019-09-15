const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');

$d = fs.readdir($csvPath,function(err,files){
    if(err){
        return console.log('Unable to scan directory: '+err);
    }
    files.forEach(function(file){
        console.log(file);
        var $content = fs.readFileSync($csvPath+'\\'+file,'utf8');
        var $lines = $content.split('\n');
        var $linecount = $lines.length-1;
        console.log($linecount);
            
        if($linecount < 500){
            $lines.forEach($line => {
                console.log($line);
            });
        }
        
    });
});

