import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/modelos/response.interface';
import { formResponseI } from 'src/app/modelos/formResponse.interface';
import { FormI } from 'src/app/modelos/form.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string = 'https://cotizador-staging.comparaonline.com/octopus-prime'
  token = ''

  constructor( private http:HttpClient) { }

  getAuth():Observable<ResponseI>{
    let user = {username: 'transatuauto', password: 'TCM9wpj3mxg9qkn-abf'}
       return this.http.post<ResponseI>(`${this.url}/auth/login`, user)
  }

  loginByDatos(form:FormI):Observable<formResponseI>{
    return this.http.post<formResponseI>(`${this.url}/auth/quotes`,form)
  }

  
}
