const express = require('express');
const app = express();

app.use(express.json);
const products= [ { "id": 1001, "name": "Banana", "price": 0.59, "ratings": [{"userid": "u0001", "rating": 4.5}, {"userid": "u0005", "rating": 3.8}, {"userid": "u0003", "rating": 4}] }, { "id": 1006, "name": "Apple", "price": 2.29, "ratings": [{"userid": "u2002", "rating": 3.6}, {"userid": "u0001", "rating": 4.6}] }, { "id": 1003, "name": "Orange", "price": 1.58, "ratings": [{"userid": "u0003", "rating": 5}, {"userid": "u0009", "rating": 2.8}, {"userid": "u0004", "rating": 4.7}] } ];

app.get('/products',(req,res) => {
  res.json(products);
  });
  
  app.post('/products',(req,res) => {
    const newProduct = {
      id: req.body.id,
      name : req.body.name,
      price : req.body.price,
      ratings : req.body.ratings || [],
  };
  
  products.push(newProduct);
  res.status(201).json(newProduct);
  });


  app.put('/products/:productId/ratings',(req,res) =>{
    const productId = req.params.productId;
    const {userid,rating} = req.body;

    const product =products.find((p) => p.id === productId);
    if(!product){
      res.status(404).json({
        error: `Product doesn’t exist with ID: ${productId} ` 
      })
    }

    const userRating = product.ratings.find((r) => r.userid === userid);

    if(userRating){
      userRating.rating =rating;
      res.json({message : 'Rating updated successfully.',product});
    }else{
      product.ratings.push({userid,rating});
      res.json ({message: 'Rating added successfully',product});
    }

  });


  app.get('/products/:id/getAverageRatings',(req,res)=> {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);

    if(!product){
      res.status(500).json({error : 'Product not found'});
    }

    if(product.ratings.length === 0){
      return  res.json({productId,averageRating : 0})
    }
    const totalRatings = product.ratings.reduce((sum,rating) => sum + rating ,0);
    const averageRating = (totalRatings/product.ratings.length).toFixed(2);
    res.json({productId,averageRating});
  });


  app.get('/products/ratings',(req,res) =>{
    const userid = req.query.userid;
    if(userid){
      const ratedProducts = products.filter(p => 
        p.ratings(r =>r.userid === userid)
      );
      if(ratedProducts.length>0){
        res.json({userid,ratedProducts});
      }else{
        res.status(500).json({error: `No products found rated by user with ID: ${userId}` })
      }

    }else{
      const allRatedProducts = products.filter(p => p.ratings.length > 0);

      res.json({allRatedProducts});
    }
  })
  
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
