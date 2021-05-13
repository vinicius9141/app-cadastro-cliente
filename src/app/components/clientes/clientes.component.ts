import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../models/cliente';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  constructor(private clienteService : ClientesService, private clientes: Cliente) { }
  
  
  
  ngOnInit(): void {  }


  getCliente () {
    this.clienteService.getCadastro()
      .subscribe(
        cliente => {
          this.clientes = cliente
          console.log(cliente)
        },
        error => {
          console.log(error)
        }
      )
  }
}
