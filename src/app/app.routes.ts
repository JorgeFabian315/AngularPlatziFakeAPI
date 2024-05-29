import { Routes } from '@angular/router';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { EliminarproductoComponent } from './components/eliminarproducto/eliminarproducto.component';

export const routes: Routes = [
    {
        path: 'agregarproducto',
        component: AgregarProductoComponent
    },
    {
        path: 'lista',
        component: ListaProductosComponent
    },
    {
        path: 'editar/:id',
        component: EditarProductoComponent
    },
    {
        path: 'eliminar/:id',
        component: EliminarproductoComponent
    },
    {
        path: '',
        redirectTo: '/lista',
        pathMatch: 'full'
    }

]