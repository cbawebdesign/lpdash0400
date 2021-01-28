import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { GroceryItem } from 'src/models/grocery-item';
import { Item } from 'src/models/item';
import {q12020Item} from 'src/models/q12020-item';



export interface Task {
  text: string
  completed: boolean
}
@Component({
  selector: 'app-to-do-firebase',
  templateUrl: './to-do-firebase.component.html',
  styleUrls: ['./to-do-firebase.component.scss']
})
export class ToDoFirebaseComponent  {

  
    createItem = '';
    showLoginUserInputForm = false;
    showCreateUserInputForm = false;
    email = '';
    password = '';
    // create doc of type Item that represents the individual GroceryItems nested collection
    groceryItemsDoc: AngularFirestoreDocument<Item>;
    q12020ItemsDoc: AngularFirestoreDocument<Item>;

    groceryItems: Observable<GroceryItem[]>;
    q12020Items: Observable<q12020Item[]>;

  
    constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {
      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          // show email in welcome message
          this.email = user.email;
          // call method that selects all items when user is authenticated
          this.selectItems(user.uid);
        }
      });
    }

    async addItem() {
      const id = this.afs.createId();
      const q12020Item = {
        value: this.createItem,
        id: id
    
      };
    
    
      await this.q12020ItemsDoc.collection<q12020Item>('q12020Items').doc(id).set(q12020Item)
        .then(() => {
            // when successful clear input field value here
            this.createItem = '';
        })
        .catch((error) => {
          alert(error);
        });
    }
  
    // async is not necessary here, but using it to control event loop
    // async deleteItem(groceryItem: GroceryItem) {
    //   await this.groceryItemsDoc.collection<GroceryItem>('q12020Items').doc(q12020Item.id).delete()
    //     .catch((error) => { alert(error); });
    // }
  
    showLoginUserForm() {
      this.showLoginUserInputForm = true;
    }
  
    showCreateUserForm() {
      this.showCreateUserInputForm = true;
    }
  
    createUser(email: string, password: string) {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // on success hide create user input form and store variables in login
            // and then call the login method
            this.showCreateUserInputForm = false;
            this.loginUser(email, password);
        })
        .catch((error) => {
          alert(error);
        });
    }
  
    loginUser(email: string, password: string) {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          // on success populate user variables and then select grocery items for that user
          this.selectItems(this.afAuth.auth.currentUser.uid);
        })
        .catch((error) => {
          alert(error);
        });
    }
  
    selectItems(uid: string) {
      // this.q12020ItemsDoc = this.afs.doc<Item>('user/' + uid);
      
      this.q12020Items = this.q12020ItemsDoc.collection<q12020Item>('q12020Items',  ref => ref.where('uid', '==', uid)).valueChanges();

      // // turn on logging if you want to see how the requests are sent
      // this.groceryItemsDoc.collection<GroceryItem>('GroceryItems').auditTrail().subscribe(console.log);
    }
  
    // async is not necessary here, just controlling the event loop
    async logoutUser() {
      await this.afAuth.auth.signOut()
        .catch(function(error) { alert(error); });
  
      this.email = '';
      this.password = '';
      this.showLoginUserInputForm = false;
      this.showCreateUserInputForm = false;
    }
  
    cancelButton() {
      this.showLoginUserInputForm = false;
      this.showCreateUserInputForm = false;
    }
  
  }
