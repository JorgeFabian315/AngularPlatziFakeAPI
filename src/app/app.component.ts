import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, RouterOutlet, RouterLink, ListaProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PlatziFakeStoreAPI';
}
