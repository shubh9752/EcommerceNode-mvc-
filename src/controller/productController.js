import path from 'path';
import ProductModel from '../models/productModel.js';

class ProductController{

    getProducts(req,res){
        let products=ProductModel.getProduct();
        return res.render('products',{products:products});
        
        // return res.sendFile(path.join(path.resolve(),"src",'views',"products.html" ));
    }
}

export default ProductController;