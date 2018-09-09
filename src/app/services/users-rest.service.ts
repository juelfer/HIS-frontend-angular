import { Injectable } from '@angular/core';
import { StateManagerService } from './state-manager.service';
import { User } from './../models/user.interface';
import { History } from './../models/history.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersRestService {
  userList: Array<User> = [
    {role: 'admin', uid: '001', name: 'Juan', surname: 'Fernandez', dni: '22574345Y', username: 'admin', password: '1234'},
    {role: 'doctor', uid: '002', name: 'Pedro', surname: 'López', dni: '32154621Y', username: 'doctor1', password: 'doctor1'},
    {role: 'technical', uid: '003', name: 'María José', surname: 'Polo', dni: '56782139A', username: 'tech1', password: 'techie'},
    {role: 'patient', uid: '004', name: 'Dolores', surname: 'Fuertes', dni: '10384653B', username: 'patient1', password: 'patient1'},
    {role: 'doctor', uid: '005', name: 'José', surname: 'Pérez', dni: '49180063H', username: 'doctor2', password: 'doctor2'},
    {role: 'patient', uid: '006', name: 'Angustias', surname: 'Morales', dni: '14616485F', username: 'patient2', password: 'patient2'}
  ];

  histories: Array<History> = [
    {userId:'004', doctorId: '002', log: ['24/2/12 Infección de orina', '25/2/15 Esguince de tobillo']},
    {userId:'006', doctorId: '005', log: ['5/3/14 Carencia de potasio', '28/3/18 Cálculos renales', '4/8/18 Golpe de calor'] }
  ];

  constructor(private stateManager: StateManagerService) {}

  logUser(username, pass) {
    let loggedUser=this.userList.find(loggedUser => loggedUser.username === username&&loggedUser.password===pass);
    if (loggedUser) {
      this.stateManager.login(loggedUser);
    } 
    return loggedUser;
  }

  getUserList() {
    return this.userList;
  }

  getUserDetail(id: string) {
    return this.userList.find( user => user.uid === id );
  }

  getPatientsList() {
    return this.userList.filter( user => user.role === 'patient');
  }

  getPatientDetail(id) {
    return this.userList.find( user => user.uid === id );
  }

  getHistoriesList() {
    return this.histories;
  }
  getHistoryDetail(id){
    return this.histories.find( histories => histories.userId === id );
  }
  addUser(newuser:User){
    this.userList.push(newuser);
    alert("Nuevo usuario registrado");
  }
}
