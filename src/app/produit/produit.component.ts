
import { ProduitService } from './produit.service';
/*import { ProduitMockService } from './produit.mock.service';*/

import  { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
/*import { ProduitModule } from '../shared/produit/produit.module';*/
/* import { ProduitModule } from '../shared/produit/produit.module'; */

import { ProduitModule } from "../shared/produit/produit/produit.module";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits : ProduitModule[];
  produitForm: FormGroup;

  


  constructor(private  produitService: ProduitService, private fb: FormBuilder) { 

    this.produitForm= this.fb.group({
      ref:['', Validators.required],
      quantite:'',
      prixUnitaire:''
    });
  }

  ngOnInit() {
   this.loadProduits();
  }



  loadProduits(){
    this.produitService.getProduits().subscribe(
data => {this.produits  = data},
error => {console.log('An error has occured.')},
() => {console.log('loading produits was done.')}

    );
  }

}
