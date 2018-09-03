import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersRestService {
  users = [
    {role: 'admin', uid: '001', name: 'Todo', surname: 'Poderoso', dni: '00000001X', username: 'admin', password: '1234'},
    {role: 'doctor', uid: '002', name: 'Perico', surname: 'Menguele', dni: '32154621Y', username: 'hotdoc', password: 'doctor1'},
    {role: 'technical', uid: '003', name: 'Pepa', surname: 'Polo', dni: '56782139A', username: 'lapepa', password: 'techie'},
    {role: 'patient', uid: '004', name: 'Lola', surname: 'Fuertes', dni: '10384653B', username: 'doloresfuertes', password: 'patient1'},
    {role: 'doctor', uid: 'string', name: 'Federico', surname: 'Pitanguí', dni: '49180063H', username: 'robodoc', password: 'doctor2'}
  ]
  constructor() { }
  getUserList() {
    return this.users;
  }

  getUserDetail(id: string) {
    return this.users.find( user => user.uid === id );
  }
}
