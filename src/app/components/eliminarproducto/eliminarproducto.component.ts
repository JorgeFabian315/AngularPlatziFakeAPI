import { Component, Inject, Input, OnInit } from '@angular/core';
import { Route, RouterLink, RouterOutlet } from '@angular/router';
import { ProductosService } from '../../services/core/productos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminarproducto',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './eliminarproducto.component.html',
  styleUrl: './eliminarproducto.component.css'
})

export class EliminarproductoComponent implements OnInit {
  @Input('id') ProductoId!: number;

  constructor(private service: ProductosService) { }
  ngOnInit(): void { }
  eliminarProducto() {
    this.service.deleteProducto(this.ProductoId).subscribe();
    alert("Producto eliminado");
  }
}
