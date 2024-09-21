import express from 'express';
const app =express();
app.enable('case sensitive routing');

app.use((req,res,next) => {
    console.log('1 ....... ');
    next;
})

app.listen(3000, () => console.log('listening on 3000!!!'));
app.listen(3000, () => console.log('listening on 3000!!!'));