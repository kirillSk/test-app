export interface IProduct {
    id: string,
    parentId: string | null,
    name: string,
    description: {
        ru: string,
        en: string
    },
    color: string,
    type: ProductType
}

export enum ProductType {
    Document,
    Softwate
}