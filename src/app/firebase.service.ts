import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseConfig = {
    apiKey: "AIzaSyBPn9qjn3WMBhRFUDorg2FvyqiyyXUIwus",
    authDomain: "tienda-online-c66e2.firebaseapp.com",
    databaseURL: "https://tienda-online-c66e2-default-rtdb.firebaseio.com",
    projectId: "tienda-online-c66e2",
    storageBucket: "tienda-online-c66e2.firebasestorage.app",
    messagingSenderId: "755665120529",
    appId: "1:755665120529:web:89c57e225a2c75deb9b0b0"
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor(){
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
