import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  alluserdata() {
    return this.firestore.collection('customer').snapshotChanges();
  }

  createcustomer(cust: User) {
    return this.firestore.collection('customer').add(cust);
  }

  updatecustomer(cust: User) {
    delete cust.id;
    return this.firestore.doc('customer/' + cust.id).update(cust);
  }

  deletecustomer(custId: string) {
    return this.firestore.doc('customer/' + custId).delete();
  }



}
