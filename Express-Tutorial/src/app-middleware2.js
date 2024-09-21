import express from 'express';
const app = express();

app.use((err,req,res)=>{
  console.log('Something wrong!')
})

app.use((req,res,next) => {
   console.log('Welcome!')
})


app.listen(3000, () => console.log('listening on 3000!!!'));
