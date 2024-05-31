import { Component, Input, OnInit, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AgregarProducto, EditarProducto, Producto } from '../../interfaces/producto';
import { ProductosService } from '../../services/core/productos.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {
  @Input("id") productoId!: number;
  producto: EditarProducto = {
    "title": "",
    "price": 0,
  };

  productosForm = new FormGroup({
    "title": new FormControl('', Validators.required),
    "price": new FormControl(0, Validators.required),
  });

  constructor(private service: ProductosService, private toast: ToastrService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getById(this.productoId).subscribe((producto) => {
      this.productosForm.setValue({
        title: producto.title,
        price: producto.price,
      })
    });
  }

  onSubmit() {
    this.producto.title = this.productosForm.get("title")?.value as string;
    this.producto.price = this.productosForm.get("price")?.value as number;
    this.service.putProducto(this.productoId, this.producto)
      .subscribe((data) => {
        this.toast.success(`Se actualizo el objeto ${data.title}`);
        this.router.navigate([""]);
      });
  };
}
