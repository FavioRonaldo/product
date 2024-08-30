import { ProductDto } from "../../domain/dto/ProductDto"
import httpClient from "../../presentation/utils/axios"

export default class ProductRepository{
    async getAllService():Promise<Array<ProductDto>>{
        return new Promise<Array<ProductDto>> (async (resolve,reject)=>{
            try {
                const response:any=await httpClient({
                    method:'GET',
                    url:'products'
                })
                resolve(response.data)  /*url de la api */
               //resolve(resp)

            } catch (error) {
                reject('Error')
            }
        })
    }
    async  deleteProductByID(id:string){
        //{console.log(id)}
        return new Promise<Array<ProductDto>> (async (resolve,reject)=>{
            try {
                const response:any=await httpClient({
                    method:'DELETE',
                    url:'products/'+id,
                })
                resolve(response.data)  /*url de la api */
               //resolve(resp)

            } catch (error) {
                reject('Error')
            }
        })
    }
    async editProduct(product:ProductDto){
        return new Promise<Array<ProductDto>> (async (resolve,reject)=>{
            try {
                const response:any=await httpClient({
                    method:'PUT',
                    url:'products/'+product.id,
                    body:product
                })
                resolve(response.data)  /*url de la api */
               //resolve(resp)

            } catch (error) {
                reject('Error')
            }
        }) 
    }
    async getProductById(id:string):Promise<Array<ProductDto>>{
        return new Promise<Array<ProductDto>> (async (resolve,reject)=>{
            try {
                const response:any=await httpClient({
                    method:'GET',
                    url:'products/'+id,
                })
                resolve(response.data)  /*url de la api */
               //resolve(resp)

            } catch (error) {
                reject('Error')
            }
        }) 
    }
    async SaveProdcut(product:ProductDto){
        return new Promise<Array<ProductDto>> (async (resolve,reject)=>{
            try {
                const response:any=await httpClient({
                    method:'POST',
                    url:'products/',
                    body:product
                })
                resolve(response.data)  /*url de la api */
               //resolve(resp)

            } catch (error) {
                reject('Error')
            }
        }) 
    } 
}