import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.getListClientes();
  }

  getListClientes(){
    this.dataApi.getAllClientes().subscribe(clientes => console.log(clientes));
  }
}
