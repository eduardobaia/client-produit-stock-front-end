import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProduitModule { 

  constructor(
      public ref?: string,
      public quantie?: number,
      public prixUnitaire?: number
    ){
    
    
    }


}
