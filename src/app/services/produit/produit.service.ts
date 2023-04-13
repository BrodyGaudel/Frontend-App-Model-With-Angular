import { Injectable } from '@angular/core';
import {Produit} from "../../models/produit.model";
import {Categorie} from "../../models/categorie.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
  }

  ajouterProduit(prod: Produit): Observable<Produit>{
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }

  supprimerProduit(p: Produit) {
    const url = `${this.apiURL}/${p.idProduit}`;
    return this.http.delete(url, httpOptions);
  }


  consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Produit>(url);
  }

  updateProduit(prod :Produit): Observable<Produit>{
    return this.http.put<Produit>(this.apiURL, prod, httpOptions);
  }

  listeCategories():Observable<CategorieWrapper>{
    return this.http.get<CategorieWrapper>(this.apiURLCat);
  }

  rechercherParCategorie(idCat: number): Observable<Produit[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Produit[]>(url);
  }

  rechercherParNom(nom: string): Observable<Produit[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Produit[]>(url);
  }

  ajouterCategorie( cat: Categorie):Observable<Categorie>{
    return this.http.post<Categorie>(this.apiURLCat, cat, httpOptions);
  }

  supprimerCategorie(id : number) {
    const url = `${this.apiURLCat}/${id}`;
    return this.http.delete(url, httpOptions);
  }



}
