import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../services/produit/produit.service";
import {Produit} from "../../models/produit.model";

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {

  nomProduit! : string;
  produits!: Produit[];
  allProduits!: Produit[];
  searchTerm!: string;

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });

  }

  rechercherProds(){
    this.produitService.rechercherParNom(this.nomProduit).
    subscribe(prods => {
      console.log(prods);
      this.produits=prods;});
  }

  onKeyUp(filterText : string){
    this.produits = this.allProduits.filter(item =>
      // @ts-ignore
      item.nomProduit.toLowerCase().includes(filterText));
  }

}
