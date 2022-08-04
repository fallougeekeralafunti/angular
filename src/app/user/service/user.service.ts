import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class UserService {
  api = environment.api;
  constructor(private http: HttpClient) { }

  // -------------------------- Liste des users ----------------------
  getListUsers() {
    return this.http.get<any>(this.api + 'user/');
  }

  // -------------------------- Liste des roles ----------------------
  getListRoles() {
    return this.http.get<any>(this.api + 'role');
  }


  // -------------------------- creer Users par etat----------------------
  createUser(user : any) {
    return this.http.post<any>(this.api + 'auth/register',user);
  }
  // -------------------------- delete Users par etat----------------------

  deleteUser(idUser) {
    return this.http.delete<any>(this.api + 'user/delete/'+idUser);
  }


  unLockUser(idUser) {
    return this.http.get<any>(this.api + 'user/unlock/'+idUser);
  }

  lockUser(idUser) {
    return this.http.get<any>(this.api + 'user/lock/'+idUser);
  }

// -------------------------- Liste des Users ----------------------
  // getUserFilm(user){
  //   return this.http.post<any>(this.api + 'user',user);
  // }
}
