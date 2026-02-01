//Import express
import exp from 'express'

//Import userApp
import { userApp } from './APIs/userAPI.js'

//Import productApp
import { productApp } from './APIs/productAPI.js'

//create server
const app=exp() //server is created

//assign port number
app.listen(3001,()=>console.log('HTTP server listening on port 3001'));

//body parsing middleware (resolves parsing issue)
app.use(exp.json());

//app will use userApp when it finds /user-api path
app.use('/user-api',userApp);

//app will use productapp when it finds /product-api path
app.use('/product-api',productApp);

//creating custom middleWare
function middleware1(req,res,next){
    console.log("middleware1 executed");
    //res.json({message:"from middleware1"});
    next();
}

//if we want to execute this for only get Request
//goto app.get and add middleware as parameter
//to execute for every incoming request
//app.use(middleware1);

