const path = require('path');
const fs = require('fs');
const $csvPath = path.join(__dirname,'rawCSVs');
var $filedata


$d = fs.readdir($csvPath,function(err,files){
    if(err){
        return console.log('Unable to scan directory: '+err);
    }
    files.forEach(function(file){
        console.log(file);
        var $content = fs.readFileSync($csvPath+'\\'+file,'utf8');
        var $tlines = $content.split('\n').length-1;
        console.log($tlines);
            

        /*
        var $d;
        fs.readFile($csvPath+'\\'+file,'utf8',(err,$content)=>{
            if(err){ 
                console.log(err);
                return
            }
            $filedata = $content;
            return $filedata;
            var tlines = $content.split('\n').length-1;
            console.log(tlines);
            if(tlines < 500){
                var $lines = $content.split('\n');
                $lines.forEach($line => {
                    console.log($line);
                });
            }
        });
        console.log($d);
        */
    });
});

