import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  state = {
    auth: {role:'',surname:''},
  }

  constructor() { }

  authUser(){
    if (this.state.auth.role){
      return this.state.auth;
      } else return false;
    }

  login(user){
    this.state.auth= {role: user.role, surname:user.surname};
    this.authUser();
  }
  verifyRole() {
    return this.state.auth && this.state.auth.role;
  }

  getUser() {
    return this.state.auth;
  }
  logOut() {
    this.state.auth = null;
  }
}

