const expect = require('chai').expect;
const should = require('chai').should;
const indexpage = require("../index.js");
//import getFileList from '../index.js';

describe('getFileList',function(){
    // Before attempting any processing, ensure the file exists
    describe('isFolderEmpty',function(){
        it('should return object if the folder has files',function(done){
            //return expect(indexpage.getFileList("C:\Users\amuleke\Documents\GitHub\HospitalPriceSpider\rawCSVs")).to.be.prototype
            console.log(indexpage.getFileList("C:\Users\amuleke\Documents\GitHub\HospitalPriceSpider\rawCSVs"));
        });

        it('should return null if the folder is empty',function(done){

        });
    });


    /*
    // Ensure the file is not empty (0 Kb)
    describe('isFileEmpty',function(){});

    // Confirm if a header was able to be extracted
    describe('headerRowFound',function(){});
    */
});