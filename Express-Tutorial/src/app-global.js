const fs = require('fs');
fs.readFile('a.txt', () => {
    setTimeout(() => console.log('timeout'));
    setImmediate(() => console.log('immediate'));
});