import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class DataApiService {

  clientes: Observable<any>;
  cliente: Observable<any>;

  constructor(private http: HttpClient) { }

  getAllClientes(){
    const url_api = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url_api);
  }

  
  /*getClienteById(id: string){
    const url_api = 'https://jsonplaceholder.typicode.com/users/${id}';
    return (this.cliente = this.http.get(url_api));
  }*/

  
}
