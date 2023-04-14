import {Injectable} from '@angular/core';
import {Produit} from "../../models/produit.model";
import {Categorie} from "../../models/categorie.model";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {CategorieWrapper} from "../../models/categorieWrapped";
import {AuthService} from "../auth.service";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class ProduitService {

  apiURL: string = 'http://localhost:8080/produits/api';

  apiURLCat: string = 'http://localhost:8080/produits/cat';


  constructor(private http : HttpClient,
              public authService: AuthService) {}

  theHeader(){
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    return new HttpHeaders({"Authorization": jwt});
  }

  listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL+"/all");
  }

  ajouterProduit( prod: Produit):Observable<Produit>{
    return this.http.post<Produit>(this.apiURL+"/addprod", prod);
  }

  supprimerProduit(produit: Produit) {
    const url = `${(this.apiURL)}/delprod/${produit.idProduit}`;
    return this.http.delete(url);
  }
  consulterProduit(id: number): Observable<Produit> {
    const url = `${(this.apiURL)}/getbyid/${id}`;
    return this.http.get<Produit>(url);
  }
  updateProduit(prod :Produit) : Observable<Produit> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.put<Produit>(this.apiURL+"/updateprod", prod, {headers:httpHeaders});
  }

  listeCategories():Observable<CategorieWrapper>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.get<CategorieWrapper>(this.apiURLCat,{headers:httpHeaders}
    );
  }
  rechercherParCategorie(idCat: number): Observable<Produit[]> {
    const url = `${(this.apiURL)}/prodscat/${idCat}`;
    return this.http.get<Produit[]>(url);
  }
  rechercherParNom(nom: string):Observable< Produit[]> {
    const url = `${(this.apiURL)}/prodsByName/${nom}`;
    return this.http.get<Produit[]>(url);
  }

  ajouterCategorie(cat: Categorie):Observable<Categorie>{
    return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions);
  }

  supprimerCategorie(cat: number){
    const url = `${(this.apiURL)}/delprod/${cat}`;
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.delete(url, {headers:httpHeaders});
  }

}
