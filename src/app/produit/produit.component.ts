/*import { ProduitMockService } from './produit.mock.service';*/

import  { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
/*import { ProduitModule } from '../shared/produit/produit.module';*/
/* import { ProduitModule } from '../shared/produit/produit.module'; */


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  /*produits : ProduitModule[]; */
  produitForm: FormGroup;

  constructor(/*private  productService:ProduitMockService*/ private fb: FormBuilder) { 

    this.produitForm= this.fb.group({
      ref:['', Validators.required],
      quantite:'',
      prixUnitaire:''
    });
  }

  ngOnInit() {
/*     this.produits = this.productService.getProduits(); */
  }

}
