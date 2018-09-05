import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StateManagerService {
  state = {
    auth: {role:''},
  }

  constructor() { }

  authUser(){
    if (this.state.auth.role){
      return this.state.auth;
      } else return false;
    }

  login(user){
    this.state.auth= {role: user.role};
  }
  getRole() {
    return this.state.auth && this.state.auth.role;
  }

  getUserRole() {
    return this.state.auth.role;
  }
  }

