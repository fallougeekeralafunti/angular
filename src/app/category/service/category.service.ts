import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  api = environment.api;
  constructor(private http: HttpClient) { }

  // -------------------------- Liste des categorys ----------------------
  getCategorys() {
    return this.http.get<any>(this.api + 'category');
  }

  // -------------------------- creer category----------------------
  createCategory(category : any) {
    return this.http.post<any>(this.api + 'category/create',category);
  }

  // -------------------------- delete category ----------------------
  deleteCategory(idcategory) {
    return this.http.delete<any>(this.api + 'category/delete/'+idcategory);
  }

  // -------------------------- update category  ----------------------
  updateCategory(category : any) {
    return this.http.put<any>(this.api + 'category/update',category);
  }

  // -------------------------- Liste des categorys par etat----------------------
// -------------------------- Liste des categorys ----------------------
  // getcategoryUser(film){
  //   return this.http.post<any>(this.api + 'commande/categoryFilm',film);
  // }
}
