import { Component, Inject, Input, OnInit } from '@angular/core';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductosService } from '../../services/core/productos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eliminarproducto',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './eliminarproducto.component.html',
  styleUrl: './eliminarproducto.component.css'
})

export class EliminarproductoComponent implements OnInit {
  @Input('id') ProductoId!: number;
  constructor(private service: ProductosService, private toast: ToastrService, private router: Router) { }
  ngOnInit(): void { }
  eliminarProducto() {
    this.service.deleteProducto(this.ProductoId).subscribe((data) => {
      this.toast.success(`Producto eliminado`);
      this.router.navigate([""]);
    });
  }
}
