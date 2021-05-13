import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  protected UrlServiceV1: string = "https://raw.githubusercontent.com/vinicius9141/apiteste/main/cadastro.json"


  getCadastro() : Observable<any> {
    return this.http.get<any>(this.UrlServiceV1);   
  }
}
