import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto-template',
  standalone: true,
  imports: [],
  templateUrl: './producto-template.component.html',
  styleUrl: './producto-template.component.css'
})
export class ProductoTemplateComponent {
  @Input() producto!: Producto;
}
