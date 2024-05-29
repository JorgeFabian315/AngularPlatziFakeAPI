import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-eliminarproducto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './eliminarproducto.component.html',
  styleUrl: './eliminarproducto.component.css'
})
export class EliminarproductoComponent implements OnInit {
  @Input('id') ProductoId!: number;

  ngOnInit(): void {
  }
}
