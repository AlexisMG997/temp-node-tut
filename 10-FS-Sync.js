// There are 2 flavors using Files Modules: Asynchronously (Non-blocking code) and Synchronously (Blocking code)

const {readFileSync, writeFileSync} = require('fs');

// Another way to access to these methods

//const fs = require('fs');
//fs.readFileSynch

console.log('start');

// Synchronously reads the entire contents of a file.
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// Creates and writes a file. If the file is already there, only will be updated.
//writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`);

// Will uppend to the file
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
    );
console.log('Done with this task');
console.log('Start with the next one');
