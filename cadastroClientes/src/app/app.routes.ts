 import { Routes } from '@angular/router';
import { FormularioClientesComponent } from './components/formulario-clientes/formulario-clientes.component';
import { AppComponent } from './app.component';
import { TableClientesComponent } from './components/table-clientes/table-clientes.component';


export const routes: Routes = [
    {path: '', component: TableClientesComponent},
    {path: 'addClientes', component: FormularioClientesComponent}
];
