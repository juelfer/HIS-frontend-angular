import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  state = {
    auth: {role:'', name:'', surname:'', uid:''},
  }

  constructor() { }

  isLogged(){
    if (this.state.auth.role){
      return this.state.auth;
      } else return false;
    }

  login(user){
    this.state.auth= {role: user.role, name: user.name, surname:user.surname, uid: user.uid};
    this.isLogged();
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

