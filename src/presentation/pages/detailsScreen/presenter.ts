import Product from "../../../domain/entities/Product";
import ProductController from "../../../infrastructure/controller/ProductController";

export default class ProductPresenter{
    private controller=new ProductController()
    async deleteProductById(id:string){
        return await this.controller.deleteProductById(id)
    }
}