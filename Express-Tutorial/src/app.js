import express from 'express';
import path from 'path'; 
import { fileURLToPath } from 'url'

const app = express();
const __filename = fileURLToPath(import.meta.url);  // Get the filename of the current module
const __dirname = path.dirname(__filename); 

app.use('/errorTest',(req,res,next)=>{
    throw new Error('Whoops');
})

app.use((err,req,res,next)=>{
    res.status(500).send(`Something broke! ${err.message}`);
})

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    });

app.listen(3000,() => {console.log('Server is running at 3000')});
