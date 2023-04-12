import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './components/update-produit/update-produit.component';
import {HttpClientModule} from "@angular/common/http";
import { RechercheParCategorieComponent } from './components/recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './components/recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { ListeCategoriesComponent } from './components/liste-categories/liste-categories.component';
import { UpdateCategorieComponent } from './components/update-categorie/update-categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    RechercheParCategorieComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeCategoriesComponent,
    UpdateCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
