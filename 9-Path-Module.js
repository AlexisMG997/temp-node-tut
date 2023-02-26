const path = require('path');

//Return my path specified separetly
console.log(path.sep);

//Join all arguments together and normalize the resulting path
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

//Join all arguments together and normalize the resulting path
const base = path.basename(filePath)
console.log(base);

//Display absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);