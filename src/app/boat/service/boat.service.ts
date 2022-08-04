import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class BoatService {
  api = environment.api;
  constructor(private http: HttpClient) { }

  // -------------------------- Liste des movies ----------------------
  getBoats() {
    return this.http.get<any>(this.api + 'boat');
  }

  // -------------------------- creer Movie----------------------
  createBoat(boat : any) {
    return this.http.post<any>(this.api + 'boat/create',boat);
  }

  // -------------------------- delete movie ----------------------
  deleteBoat(idBoat) {
    return this.http.delete<any>(this.api + 'boat/delete/'+idBoat);
  }

  // -------------------------- update Movie  ----------------------
  updateBoat(boat : any) {
    return this.http.put<any>(this.api + 'boat/update',boat);
  }

 
}
