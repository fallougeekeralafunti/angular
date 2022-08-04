import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class RoleService {
  api = environment.api;
  constructor(private http: HttpClient) { }

  // -------------------------- Liste des roles ----------------------
  getRoles() {
    return this.http.get<any>(this.api + 'role');
  }

  // -------------------------- creer Role----------------------
  createRole(role : any) {
    return this.http.post<any>(this.api + 'role/create',role);
  }

  // -------------------------- delete role ----------------------
  deleteRole(idRole) {
    return this.http.delete<any>(this.api + 'role/delete/'+idRole);
  }

  // -------------------------- update Role  ----------------------
  updateRole(role : any) {
    return this.http.put<any>(this.api + 'role/update',role);
  }

  // -------------------------- Liste des roles par etat----------------------
// -------------------------- Liste des roles ----------------------
  // getRoleUser(film){
  //   return this.http.post<any>(this.api + 'commande/roleFilm',film);
  // }
}
