import { Component, Input, OnInit, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {
  @Input('id') ProductoId!: number;

  ngOnInit(): void {
  }
}
