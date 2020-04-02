/*import { ProduitMockService } from './produit/produit.mock.service';*/
/* import { ProduitModule } from './shared/produit/produit.module'; */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
/*import { HttpClientModule } from "@angular/common/http";*/
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitService } from './produit/produit.service';
 

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
   
   /*  ProduitModule */
  ],
  providers: [ ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
