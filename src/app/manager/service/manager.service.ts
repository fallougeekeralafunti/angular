import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  api = environment.api;
  constructor(private http: HttpClient) { }

  // -------------------------- Liste des managers ----------------------
  getManagers() {
    return this.http.get<any>(this.api + 'role');
  }

  // -------------------------- Liste des managers par etat----------------------
// -------------------------- Liste des managers ----------------------
  getManagerFilm(film){
    return this.http.post<any>(this.api + 'commande/managerFilm',film);
  }
}
