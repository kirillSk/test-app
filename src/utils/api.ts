import {IProduct, ProductType} from "../models/product";

export function api(){
    return {
        getProducts: ()=>{
            return fetch('/products.json')
            //return fetch('https://support.stream-labs.com/api/products')
                .then(resp=>{
                    return resp.json()
                })
                .then(resp => {
                    return  resp
                        .filter((x:any)=>!x.isDeleted)
                        .map((x:any)=>{
                            let product = {} as IProduct;
                            product.id = x.ProductID;
                            product.name = x.Name;
                            product.parentId = x.ParentID ?? null;
                            product.description = {
                                ru: x.descriptionru,
                                en: x.descriptionen
                            };
                            product.color = x.colorscheme;
                            product.type = x.Type == 'software' ? ProductType.Softwate : ProductType.Document;
                            return product;
                        });
                });
        }
    };
}