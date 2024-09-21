import express from 'express';
const app = express();

app.get('/',(req,res)=>{
 res.send('Home Page')
})

app.get('/users',(req,res) => {
    res.send('User Page')
})


app.listen(3000, () => console.log('listening on 3000!!!'));
