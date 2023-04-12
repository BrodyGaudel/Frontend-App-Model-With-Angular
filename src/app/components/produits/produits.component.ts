import {Component, OnInit} from '@angular/core';
import {Produit} from "../../models/produit.model";
import {ProduitService} from "../../services/produit/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{

  produits!: Produit[];

  constructor(private produitService: ProduitService, private router: Router) {
  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }


  supprimerProduit(p: Produit) {
    let conf = confirm("Etes-vous sûr ?");
    if(conf){
      this.produitService.supprimerProduit(p).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
      });
    }
  }


  gotoUpdateComponent(produit: Produit) {
    this.router.navigate(['/updateProduit',produit.idProduit]);
  }
}
