import Product from "../../../domain/entities/Product";
import ProductController from "../../../infrastructure/controller/ProductController";

export default class ProductPresenter{
    private controller=new ProductController()
    async editProductById(product:Product){
        return await this.controller.editProductById(product)
    }
}