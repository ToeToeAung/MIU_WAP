import express from 'express';

const app = express();

app.use((req,res,next)=>{
    console.log('Hi Hi');
    next();
})

app.use('/add-product',(req,res,next)=>{
    console.log('This is add product');
    res.send('<h1> This is Add Product page');
})

app.use((req,res,next)=>{
    console.log('Without any url');
    res.send('<h1> Without any URL ');
})


app.listen(3000,() => {console.log('Server is running at 3000')});
