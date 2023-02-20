'use strict'
const {series, src, dest} = require('gulp');
const fetch  = require('node-fetch');

// function css(cb){
//     console.log('css');
//     cb();
// }

function streamTask() {
    let nDes = 0;
    return src('./src/*.js')
      .pipe(dest('output'))
      .on("data", function() { nDes+=1;})
      .on("finish", function() {       
        console.log("# dest files:", nDes);
    });
  }
// exports.default = series(css,fetchData);

function defaultTask(cb) {
    console.log("check")
    cb();
  }


  function task_request(cb){
     return new Promise(function(resolve, reject) {
        console.log("HTTP Server Started");        
        runRequest()
        resolve();
      });
  }

  async function runRequest(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data  = await response.json();
        console.log(data)        

      } catch (error) {
        console.log(error);
      }
    
  
    
  }
  
  exports.default = series(defaultTask,streamTask ,task_request);