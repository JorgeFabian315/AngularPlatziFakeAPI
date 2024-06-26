import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/core/productos.service';
import { Producto } from '../../interfaces/producto';
import { Observable } from 'rxjs';
import { ProductoTemplateComponent } from '../producto-template/producto-template.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [ProductoTemplateComponent, RouterOutlet, RouterLink],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit {
  public Productos$!: Producto[];
  constructor(private service: ProductosService) { }
  ngOnInit(): void {
    this.service.getProductos().subscribe((data) => {
      this.Productos$ = data;
    });
  }



}
