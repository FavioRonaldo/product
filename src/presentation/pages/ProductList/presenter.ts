import Product from "../../../domain/entities/Product";
import ProductController from "../../../infrastructure/controller/ProductController";

export default class ProductPresenter{
    private controller=new ProductController()
    async getAllProduct():Promise<Product[]>{
        return await this.controller.getAllProducts()
    }
    
}