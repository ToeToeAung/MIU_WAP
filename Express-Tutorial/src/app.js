const express = require('express');
const app = express();

// Your middleware and routes code here
app.use((req, res, next) => {
  console.log(1);
  next();
},(req, res, next) =>{
    console.log(2);
    next('route');
},(req, res, next) => {
    console.log(3);
    next();
  }
)


app.get('/users', (req, res, next) => {
  console.log(4);
  next('route');
}, (req, res, next) => {
  console.log(5);
  next();
});

app.post('/users', (req, res, next) => {
  console.log(6);
  res.end('POST');
});

app.use((req, res, next) => {
  console.log(7);
  res.end('404');
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
