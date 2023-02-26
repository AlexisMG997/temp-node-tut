// There are 2 flavors using Files Modules: Asynchronously and Synchronously

const {readFile, writeFile} = require('fs');

// Callback runs after a function completes their execution
// Callback will run every time we click on a button

// Note: if we not provide UTF-8 Coding right the content, we'll have a result on hexadecimal. 
console.log('Start');
readFile('./content/first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second = result;
    writeFile(
        './content/result-async.txt',`Here is the result: ${first}, ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            // console.error(result);
            console.log('Doe with this task');
        })
    })
})
console.log('Starting next task');
