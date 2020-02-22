import { ProduitMockService } from './produit.mock.service';

import { Component, OnInit } from '@angular/core';
/* import { ProduitModule } from '../shared/produit/produit.module'; */


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

/*   produits : ProduitModule[]; */

  constructor(private  productService:ProduitMockService) { 

  }

  ngOnInit() {
/*     this.produits = this.productService.getProduits(); */
  }

}
