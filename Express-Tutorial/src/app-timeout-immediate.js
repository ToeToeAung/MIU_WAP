import { readFile } from 'fs';

readFile('a.txt', () => {
    setTimeout(() => console.log('timeout'));
    setImmediate(() => console.log('immediate'));
});
