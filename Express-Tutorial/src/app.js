import express from 'express';

const app = express();

app.use('/errorTest',(req,res,next)=>{
    throw new Error('Whoops');
})

app.use((err,req,res,next)=>{
    res.status(500).send(`Something broke! ${err.message}`);
})


app.listen(3000,() => {console.log('Server is running at 3000')});
