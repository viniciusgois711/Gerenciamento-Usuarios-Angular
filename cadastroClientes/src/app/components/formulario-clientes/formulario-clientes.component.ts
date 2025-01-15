import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoTableModule,
  PoTableColumn,
  PoButtonModule,
  // Necessário para adicionar campos no formulário
  PoFieldModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-formulario-clientes',
  standalone: true,
  imports: [RouterLink, PoButtonModule, FormsModule, PoFieldModule],
  templateUrl: './formulario-clientes.component.html',
  styleUrl: './formulario-clientes.component.css'
})
export class FormularioClientesComponent {
  
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

  clientes:Array<any> = [];

  idAlterar=0;

  constructor(private router: Router){

    let state: any = this.router.getCurrentNavigation()?.extras.state;

    if(state){
      this.idAlterar = state['id']
    }
  }

  ngOnInit(){

    let clientesRecuperados = sessionStorage.getItem('clientes');

    this.clientes = clientesRecuperados ? JSON.parse(clientesRecuperados) : [];

    if(this.idAlterar != 0){
      let indice = this.clientes.findIndex((c:any) => c.id == this.idAlterar)
      this.cliente = this.clientes[indice]
      this.idAlterar = 0;
    }

  }
  
  salvar(){
    
    if(this.cliente.id == 0){
      let ultimoId =  this.clientes.reduce((last, cliente) => cliente.id, 0);

      this.cliente.id = ultimoId+1;

      this.clientes.push({...this.cliente});
    }else{
      let indice = this.clientes.findIndex((c:any) => c.id == this.idAlterar)
      this.cliente = this.clientes[indice]
    }
   
    let clientesString = JSON.stringify(this.clientes);
    sessionStorage.setItem('clientes', clientesString);
    this.router.navigate([''])
  }


}
