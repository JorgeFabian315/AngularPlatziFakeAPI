export interface category {
    "id": number,
    "name": string,
    "image": [string],
}

export interface Producto {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": category,
    "images": [string]
}
export interface AgregarProducto {
    "title": string,
    "price": number,
    "description": string,
    "categoryId": number,
    "images": [string]
}