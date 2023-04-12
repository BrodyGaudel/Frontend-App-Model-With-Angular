import {Component, OnInit} from '@angular/core';
import {Produit} from "../../models/produit.model";
import {ProduitService} from "../../services/produit/produit.service";
import {Categorie} from "../../models/categorie.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  newProduit = new Produit();

  categories! : Categorie[];
  newIdCat! : number;
  constructor(private produitService: ProduitService,
              private router :Router) { }
  ngOnInit() {
    this.produitService.listeCategories().
    subscribe(cats => {console.log(cats);
        this.categories = cats._embedded.categories;
      }
    );
  }

  addProduit() {
    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.produitService.ajouterProduit(this.newProduit)
      .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['produits']);
      });
  }


}
