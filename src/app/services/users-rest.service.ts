import { Injectable } from '@angular/core';
import { StateManagerService } from './state-manager.service';
import { User } from './../models/user.interface';
import { History } from './../models/history.interface';
import { Patient } from './../models/patient.interface';
import { Doctor } from './../models/doctor.interface';
import { Technical } from '../models/technical.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersRestService {
  // users: Array<User> = [
  //   {role: 'admin', uid: '001', name: 'Todo', surname: 'Poderoso', dni: '00000001X', username: 'admin', password: '1234'},
  //   {role: 'doctor', uid: '002', name: 'Perico', surname: 'Menguele', dni: '32154621Y', username: 'hotdoc', password: 'doctor1'},
  //   {role: 'technical', uid: '003', name: 'María José', surname: 'Polo', dni: '56782139A', username: 'lapepa', password: 'techie'},
  //   {role: 'patient', uid: '004', name: 'Dolores', surname: 'Fuertes', dni: '10384653B', username: 'lolafuertes', password: 'ayayay'},
  //   {role: 'doctor', uid: '005', name: 'Federico', surname: 'Pitanguí', dni: '49180063H', username: 'robodoc', password: 'doctor2'},
  //   {role: 'patient', uid: '006', name: 'Angustias', surname: 'Morales', dni: '14616485F', username: 'angus', password: 'ayayay'}
  // ];

  userList = [];

  histories: Array<History> = [
    {userId:'004', doctorId: '002', log: ['24/2 Uñero en el dedo gordo del pie', '25/2 Uñero en el dedo gordo del otro pie']},
    {userId:'006', doctorId: '005', log: ['5/3 Carencia de potasio', '28/3 Carencia de potasio', '4/4 Saturación de potasio en sangre'] }
  ];

  patients: Array<Patient> = [
    {role: 'patient', uid: '004', name: 'Dolores', surname: 'Fuertes', dni: '10384653B', username: 'lolafuertes', password: 'ayayay', sip: '10384653', historiesIds: []},
    {role: 'patient', uid: '006', name: 'Angustias', surname: 'Morales', dni: '14616485F', username: 'angus', password: 'uyuyuy', sip: '14616485F', historiesIds:[]}
  ]
  
  doctors: Array<Doctor> = [
    {role: 'doctor', uid: '002', name: 'Perico', surname: 'Menguele', dni: '32154621Y', username: 'hotdoc', password: 'doctor1'},
    {role: 'doctor', uid: '005', name: 'Federico', surname: 'Pitanguí', dni: '49180063H', username: 'robodoc', password: 'doctor2'}
  ]

  technicals: Array<Technical> = [
    {role: 'technical', uid: '003', name: 'María José', surname: 'Polo', dni: '56782139A', username: 'lapepa', password: 'techie'}
  ]

  admins: Array<User> = [
    {role: 'admin', uid: '001', name: 'Todo', surname: 'Poderoso', dni: '00000001X', username: 'admin', password: '1234'},
  ]

  constructor(private stateManager: StateManagerService) {
    let user = {uid: 'string', role: 'string', username: 'string', password: 'string'};
    for (let patient of this.patients) {
      user.uid = patient.uid,
      user.role = 'patient',
      user.username = patient.username,
      user.password = patient.password
      this.userList.push(user);
    }; 
    for (let doctor of this.doctors) {
      user.uid = doctor.uid,
      user.role = 'doctor',
      user.username = doctor.username,
      user.password = doctor.password
      this.userList.push(user);
    };
    for (let technical of this.technicals) {
      user.uid = technical.uid,
      user.role = 'technical',
      user.username = technical.username,
      user.password = technical.password
      this.userList.push(user);
    };
    for (let admin of this.admins) {
      user.uid = admin.uid,
      user.role = 'admin',
      user.username = admin.username,
      user.password = admin.password
      this.userList.push(user);
    };
  }
  
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
    return this.patients;
  }

  getPatientDetail(id) {
    return this.patients.find( patient => patient.uid === id );
  }

  getHistoriesList() {
    return this.histories;
  }
  getHistoryDetail(id){
    return this.histories.find( histories => histories.userId === id );
  }
  addUser(newuser:User){
    this.userList.push(newuser);
  }
}
