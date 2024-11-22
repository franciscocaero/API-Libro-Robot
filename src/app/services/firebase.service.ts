import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  addItem(title: string, imageUrl: string): Promise<void> {
    const itemsCollection = collection(this.firestore, 'items');
    return addDoc(itemsCollection, { title, imageUrl }).then(() => {
      console.log('Document written');
    });
  }
}


