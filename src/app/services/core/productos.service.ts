import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private httpClient = inject(HttpClient);
  constructor() { }
  getProductos() {
    return this.httpClient.get<Producto[]>('https://api.escuelajs.co/api/v1/products');
  }

}
