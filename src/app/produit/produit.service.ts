import { ProduitModule } from './../shared/produit/produit/produit.module';

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

  addProduit(p: ProduitModule): Observable<any>{
    return  this.http.post(API_URLS.PRODUIT_URL, p);
  }

  updateProduit(p: ProduitModule): Observable<any>{
    return this.http.put(API_URLS.PRODUIT_URL, p)
  }

  deleteProduit(ref: string) : Observable<any>{
    return this.http.delete(API_URLS.PRODUIT_URL + '/${ref}');
  }
}
 