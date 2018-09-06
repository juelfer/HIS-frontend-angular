import { Injectable } from '@angular/core';
import { StateManagerService } from './state-manager.service';
import { User } from './../models/user.interface';
import { History } from './../models/history.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersRestService {
  users: Array<User> = [
    {role: 'admin', uid: '001', name: 'Todo', surname: 'Poderoso', dni: '00000001X', username: 'admin', password: '1234'},
    {role: 'doctor', uid: '002', name: 'Perico', surname: 'Menguele', dni: '32154621Y', username: 'hotdoc', password: 'doctor1'},
    {role: 'technical', uid: '003', name: 'María José', surname: 'Polo', dni: '56782139A', username: 'lapepa', password: 'techie'},
    {role: 'patient', uid: '004', name: 'Dolores', surname: 'Fuertes', dni: '10384653B', username: 'lolafuertes', password: 'ayayay'},
    {role: 'doctor', uid: '005', name: 'Federico', surname: 'Pitanguí', dni: '49180063H', username: 'robodoc', password: 'doctor2'},
    {role: 'patient', uid: '006', name: 'Angustias', surname: 'Morales', dni: '14616485F', username: 'angus', password: 'ayayay'}
  ];

  histories: Array<History> = [
    {userId:'004', doctorId: '002', log: ['24/2 Uñero en el dedo gordo del pie', '25/2 Uñero en el dedo gordo del otro pie']},
    {userId:'006', doctorId: '005', log: ['5/3 Carencia de potasio', '28/3 Carencia de potasio', '4/4 Saturación de potasio en sangre'] }
  ];

  constructor(private stateManager: StateManagerService) { }
  
  logUser(username, pass) {
    let loggedUser=this.users.find(loggedUser => loggedUser.username === username&&loggedUser.password===pass);
    if (loggedUser) {
      this.stateManager.login(loggedUser);
    } 
    return loggedUser;
  }

  getUserList() {
    return this.users;
  }

  getUserDetail(id: string) {
    return this.users.find( user => user.uid === id );
  }

  getPatientsList() {
    let list = [];
    list = this.users.filter( user => user.role === 'patient' );
    return list;
  }
  getHistoriesList() {
    return this.histories;
  }
  getHistoryDetail(id){
    return this.histories.find( histories => histories.userId === id );
  }
}
