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