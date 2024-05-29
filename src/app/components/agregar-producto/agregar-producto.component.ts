import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/core/productos.service';
import { AgregarProducto, Producto } from '../../interfaces/producto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  constructor(private service: ProductosService) { }
  producto: AgregarProducto = {
    "title": "",
    "price": 0,
    "description": "",
    "categoryId": 1,
    "images": ['https://placeimg.com/640/480/any']
  };
  agregarProducto() {
    this.service.postProducto(this.producto).subscribe((data) => {
      console.log(data);
    });
  }


}
