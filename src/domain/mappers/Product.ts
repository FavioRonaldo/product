import { ProductDto } from "../dto/ProductDto";
import Product from "../entities/Product";

export function productDtoToObject(dto:ProductDto):Product{
    const product=new Product()
    product.id=dto.id
    product.name=dto.name
    product.description=dto.description
    product.logo=dto.logo
    product.dateRealease=dto.date_release
    product.dateRevision=dto.date_revision
    return product
}
export function productDtoToArray(dtos:ProductDto[]):Product[]{
    return dtos.map((dto)=>productDtoToObject(dto))
}
export function productToDto(product:Product):ProductDto{
    const productDto: ProductDto = {
        id: product.id,
        name: product.name,
        description: product.description,
        logo: product.logo,
        date_release: product.dateRealease,
        date_revision: product.dateRevision
    }
    return productDto
}