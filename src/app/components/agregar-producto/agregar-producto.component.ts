import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductosService } from '../../services/core/productos.service';
import { AgregarProducto, Producto } from '../../interfaces/producto';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  constructor(private service: ProductosService, private toast: ToastrService, private router: Router) { }
  producto: AgregarProducto = {
    "title": "",
    "price": 0,
    "description": "",
    "categoryId": 1,
    "images": ['https://placeimg.com/640/480/any']
  };

  productosForm = new FormGroup({
    "title": new FormControl("", Validators.required),
    "price": new FormControl(0, [Validators.required, Validators.max(1000000),
    Validators.min(1)]),
    "description": new FormControl("", Validators.required)
  });

  agregarProducto() {

    this.producto.title = this.productosForm.get("title")?.value as string;
    this.producto.price = this.productosForm.get("price")?.value as number;
    this.producto.description = this.productosForm.get("description")?.value as string;

    this.service.postProducto(this.producto).subscribe((data) => {
      this.toast.success(`Se agrego el objeto ${data.title}`);
      this.router.navigate([""]);
    });
  }


}
