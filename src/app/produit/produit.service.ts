
import { API_URLS } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  getProduits(): Observable<any>{
    return this.http.get(API_URLS.PRODUIT_URL); 
  }
}
 