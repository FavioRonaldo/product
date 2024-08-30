import ProductUseCases from "../../application/Products/ProductUseCases";
import Product from "../../domain/entities/Product";
import ProductRepository from "../repository/ProductRepository";

export default class ProductController{
    private repository=new ProductRepository()
    private useCases=new ProductUseCases(this.repository)
    async getAllProducts():Promise<Product[]>{
        return await this.useCases.getAllService()
    }
    async deleteProductById(id:string) {
        return await this.useCases.deleteProductById(id)
    }
    async editProductById(product:Product){
        return await this.useCases.editProduct(product)
    }
    async getProductById(id:string):Promise<Product[]>{
        return await this.useCases.getProductById(id)
    }
    async SaveProdcut(product:Product){
        return await this.useCases.SaveProdcut(product)
    }

}