import { ProductDto } from "../../domain/dto/ProductDto";
import Product from "../../domain/entities/Product";
import { productDtoToArray, productToDto } from "../../domain/mappers/Product";
import ProductRepository from "../../infrastructure/repository/ProductRepository";

export default class ProductUseCases{
    private repository:ProductRepository
    constructor (repository:ProductRepository){
        this.repository=repository
    }
    async getAllService():Promise<Product[]>{
        return productDtoToArray(await this.repository.getAllService())
    }
    async deleteProductById(id:string){
        return await this.repository.deleteProductByID(id)
    }
    async editProduct(product:Product){
        return await this.repository.editProduct(productToDto(product))
    }
    async getProductById(id:string):Promise<Product[]>{
        return productDtoToArray(await this.repository.getProductById(id))
    }
    async SaveProdcut(product:Product){
        return  await this.repository.SaveProdcut(productToDto(product))
    }
}