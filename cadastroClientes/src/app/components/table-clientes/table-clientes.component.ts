import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoTableModule,
  PoTableColumn,
  PoButtonModule
} from '@po-ui/ng-components';

@Component({
  selector: 'app-table-clientes',
  standalone: true,
  imports: [PoTableModule, PoButtonModule, RouterLink],
  templateUrl: './table-clientes.component.html',
  styleUrl: './table-clientes.component.css'
})
export class TableClientesComponent implements OnInit{

  
  // Objeto a ser manipulado para adiconar no array de clientes
  cliente = {}

  // Array de clientes
  clientes: Array<any> = [];

  constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    let clientesRecuperado = sessionStorage.getItem('clientes');

    this.clientes = clientesRecuperado ? JSON.parse(clientesRecuperado) : '[]';
  }

  navegarParaFormulario(){
    this.router.navigate(['/addClientes'])
  }

  // Titulos das colunas da tabela
  public readonly colunas: Array<PoTableColumn> = [
    {property: 'id', label: 'ID'},
    {property: 'nome', label: 'Nome'},
    {property: 'cnpj', label: 'CNPJ'},
    {property: 'nicho', label: 'Nicho'},
    {property: 'acoes', label: 'Ações'},
  ];

}
