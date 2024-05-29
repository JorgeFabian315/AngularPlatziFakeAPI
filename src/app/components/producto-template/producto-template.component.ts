import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-producto-template',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './producto-template.component.html',
  styleUrl: './producto-template.component.css'
})
export class ProductoTemplateComponent {
  @Input() producto!: Producto;
}
