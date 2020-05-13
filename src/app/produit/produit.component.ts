import { ProduitModule } from './../shared/produit/produit/produit.module';

import { ProduitService } from './produit.service';
/*import { ProduitMockService } from './produit.mock.service';*/

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*import { ProduitModule } from '../shared/produit/produit.module';*/
/* import { ProduitModule } from '../shared/produit/produit.module'; */


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: ProduitModule[];
  produitForm: FormGroup;

  operation: string = 'add';
  selectedProduit: ProduitModule;


  constructor(private produitService: ProduitService, private fb: FormBuilder, private router: ActivatedRoute) {
    this.createForm();
  }

  createForm() {

    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
  }

  ngOnInit() {
    this.initProduit();
    this.loadProduits();
    this.produits = this.router.snapshot.data.produits;
  }



  loadProduits() {
    this.produitService.getProduits().subscribe(
      data => { this.produits = data },
      error => { console.log('An error has occured.') },
      () => { console.log('loading produits was done.') }

    );
  }

  addProduit() {
    const p = this.produitForm.value;

    this.produitService.addProduit(p).subscribe(

      res => {
        this.initProduit()
        this.loadProduits();

      }

    );

  }



  updateProduit() {
    this.produitService.updateProduit(this.selectedProduit)
      .subscribe(
        res => {
          this.initProduit()
          this.loadProduits();
        }

      );
  }

  initProduit() {
    this.selectedProduit = new ProduitModule();
    this.createForm();
  }


  deleteProduit() {
console.log("FOGO"+ this.selectedProduit.ref );

    this.produitService.deleteProduit(this.selectedProduit.ref)
      .subscribe(
        res => {
          this.selectedProduit = new ProduitModule();
          this.loadProduits();
        }

      );
  }

}
