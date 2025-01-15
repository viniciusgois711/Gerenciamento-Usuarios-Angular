import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoTableModule,
  PoTableColumn,
  PoButtonModule,
  PoTableAction,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'app-table-clientes',
  standalone: true,
  imports: [PoTableModule, PoButtonModule,RouterLink],
  templateUrl: './table-clientes.component.html',
  styleUrl: './table-clientes.component.css'
})
export class TableClientesComponent implements OnInit{

  
  // Objeto a ser manipulado para adiconar no array de clientes
  cliente = {
    id:0,
    nome: '',
    cnpj: '',
    nicho: '',
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
  }

  // Array de clientes
  clientes: Array<any> = [];

  constructor(private router: Router, private route: ActivatedRoute, private notificacao: PoNotificationService){}

  ngOnInit(): void {
    let clientesRecuperado = sessionStorage.getItem('clientes');

    this.clientes = clientesRecuperado ? JSON.parse(clientesRecuperado) : [];

  }

  navegarParaFormulario(){
    this.router.navigate(['/formularioClientes'])
  }

  // Titulos das colunas da tabela
  public readonly colunas: Array<PoTableColumn> = [
    {property: 'id', label: 'ID'},
    {property: 'nome', label: 'Nome'},
    {property: 'cnpj', label: 'CNPJ'},
    {property: 'nicho', label: 'Nicho'},
    {property: 'acoes', label: 'Ações'},
  ];

  public readonly acoes: Array<PoTableAction> = [
    {label: 'editar',  action: this.editarCliente.bind(this)},
    {label: 'excluir',  action: this.excluirCliente.bind(this)},
  ]

  editarCliente(cliente: any){
    // console.log(cliente.id)
    this.router.navigate(['/formularioClientes'], { state: {id: cliente.id}} )
  }

  excluirCliente(cliente: any){
    let indice = this.clientes.findIndex((t:any) => t.id === cliente.id);
    this.clientes.splice(indice, 1);
    this.notificacao.success("Cliente removido com sucesso!");

    let clientesString = JSON.stringify(this.clientes);
    sessionStorage.setItem('clientes', clientesString);
  }

}
