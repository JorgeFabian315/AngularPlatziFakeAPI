import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AgregarProducto, Producto } from '../../interfaces/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private httpClient = inject(HttpClient);
  private url = 'https://api.escuelajs.co/api/v1/products/';
  constructor() { }

  getProductos() {
    return this.httpClient.get<Producto[]>(this.url);
  }

  postProducto(producto: AgregarProducto) {
    return this.httpClient.post<Producto>(this.url, producto);
  }
  deleteProducto(id: number): Observable<Producto> {
    return this.httpClient.delete<Producto>(this.url + id);
  }
}
