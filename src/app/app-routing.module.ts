import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './components/add-produit/add-produit.component';
import { ProduitsComponent } from './components/produits/produits.component';
import { UpdateProduitComponent } from './components/update-produit/update-produit.component';
import {RechercheParCategorieComponent} from "./components/recherche-par-categorie/recherche-par-categorie.component";
import {RechercheParNomComponent} from "./components/recherche-par-nom/recherche-par-nom.component";
import {ListeCategoriesComponent} from "./components/liste-categories/liste-categories.component";

const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
  {path: "add-produit", component : AddProduitComponent},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: "rechercheParCategorie", component : RechercheParCategorieComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeCategories", component : ListeCategoriesComponent},
  {path: "", redirectTo: "produits", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
