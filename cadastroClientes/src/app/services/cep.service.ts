import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private urlApi = "https://viacep.com.br/ws/"

  constructor(private http: HttpClient) {}

  getEnderecoApi(cep:string): Observable<any>{
    return this.http.get<any>(`${this.urlApi}${cep}/json`)
  }

}
