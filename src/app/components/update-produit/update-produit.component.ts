import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../services/produit/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Produit} from "../../models/produit.model";
import {Categorie} from "../../models/categorie.model";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private produitService: ProduitService) {
  }

  ngOnInit(): void {
    this.produitService.listeCategories().
    subscribe(cats => {console.log(cats);
        this.categories = cats._embedded.categories;
      }
    );
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentProduit = prod;
      this.updatedCatId = this.currentProduit.categorie.idCat;
    } ) ;
  }

  updateProduit() {
    this.currentProduit.categorie = this.categories.
    find(cat => cat.idCat == this.updatedCatId)!;
    this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
      this.router.navigate(['produits']); }
    );
  }

}


