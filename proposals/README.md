#File contains steps and choices made in each

##Stage 1: Convert csv to json
##Stage 2
##Stage 3
##Stage 4

#Stage 1
I needed to atleast present some data to a browser, so I opted for
express js, to help me convert csv data to json, I used the library
csvtojson `https://www.npmjs.com/package/csvtojson` which is well 
maintained, instead of writing my own read file functions which would
take alot of the project time, not to mention the bugs that comes with
such. I trust csvtojson is a good choice for this mission.

###Project setup
Added files/folders
+ package.json 
+ index.js // our express server file
+ ./services/csvToJson.js // module that converts csv to json given file path

### Preview the project
run `yarn install` or `npm install` to download and install express and
 csvtojson and their dependencies.
 
 In the project root dir, run node index.js to start express server,
 You will get an output also to the console of the data in file
 McLean_Hospital.csv, also access the same json data via the port your
 app is working on, in my case http://localhost:3007/api/test/.
 The fields data are unmatched and other files data can be retrived via
 the same way by editing index.js on line 19
 
 