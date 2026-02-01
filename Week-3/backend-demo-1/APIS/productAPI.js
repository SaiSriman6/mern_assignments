import exp from 'express';

//create mini - express(Seperate Route) app
//one express is enough to handle so we will use mini express(it can handle routes but cant listen to request from client)
export const productApp=exp.Router();

// In-memory array to store product data
let products=[];

//GET request handler
productApp.get('/products',(req,res)=>{
    //send all products
    res.json({message:"products are",payload:products});
})

//POST request handler
productApp.post('/products',(req,res)=>{
    // getting product from request
    let newProduct=req.body;

    // adding product
    products.push(newProduct);
    
    // send success response
    res.json({message:"Product added"});
})

//PUT request handler
productApp.put('/products',(req,res)=>{
    //getting modified product from request
    let updatedProduct=req.body;

    //Finding product Index to be updated
    let productIndex=products.findIndex(product=>product.productId==updatedProduct.productId)
    
    //if product not found
    if(productIndex===-1){
        return res.json({message:"product not found"});
    }

    //if found modify and send success response
    let modifiedProduct=products.splice(productIndex,1,updatedProduct);
    res.json({message:"product updated successfully"}); 
})

//GET request handler for product by Id
 productApp.get('/product-id/:id',(req,res)=>{
     //Convert id from URL parameter to number
     let productId=Number(req.params.id);

     //Search product using productId
     let product=products.find(p=>p.productId===productId);

     //If product does not exist
     if(!product){
         return res.json({message:"product not found"});
     }
     //Send found product
     res.json({message:"product",payload:product});
 })

//GET request handler for products by Brand
  productApp.get('/product-brand/:brand',(req,res)=>{
      //Read brand name from URL and convert to lowercase
      let brand=req.params.brand.toLowerCase();

      //Filter products that match the given brand
      let brandProducts=products.filter(product=>product.brand.toLowerCase()===brand);

      //If no products found for the brand
      if(!brandProducts){
          return res.json({message:"no products in this brand"});
      }
      //Send matching products
      res.json({message:"products in this brand are",payload:brandProducts});
  })


//DELETE request route method(delete product by id)
 productApp.delete('/products/:id',(req,res)=>{
    //Convert id from URL parameter to number
    let pId = Number(req.params.id);

    //Find index of product to be deleted
    let productIndex = products.findIndex(product => product.productId===pId);
    
    //If product is not found
    if(productIndex===-1){
        return res.json({message:"product not found"});
    }

    //Remove product
    let deletedProduct = products.splice(productIndex,1);

    //send success response
    res.json({message:"product deleted"});
 })
