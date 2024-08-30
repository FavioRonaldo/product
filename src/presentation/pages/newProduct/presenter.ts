import Product from "../../../domain/entities/Product";
import ProductController from "../../../infrastructure/controller/ProductController";

export default class ProductPresenter{
    private controller=new ProductController()
    async getProductById(id:string):Promise<Product[]>{
        return await this.controller.getProductById(id)
    }
    async SaveProdcut(product:Product){
        return await this.controller.SaveProdcut(product)
    }
    
}