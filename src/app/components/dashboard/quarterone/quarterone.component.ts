// import { Component, OnInit, ElementRef } from '@angular/core';
// import * as data from '../../../shared/data/sticky/sticky';



// @Component({
//   selector: 'app-quartertwo',
//   templateUrl: './quartertwo.component.html',
//   styleUrls: ['./quartertwo.component.scss']
// })
// export class QuartertwoComponent {


//   constructor() {
//   }


// }


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-sample-page',
//   templateUrl: './sample-page.component.html',
//   styleUrls: ['./sample-page.component.scss']
// })
// export class SamplePageComponent implements OnInit {

//   constructor() { }

//   ngOnInit() { }

// }



import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {q12020Item} from 'src/models/q12020-item';
import { finalize, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

import {
  ButtonsConfig,
  ButtonsStrategy,
  DotsConfig,
  GalleryService,
  Image,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  ButtonEvent,
  ButtonType,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  AdvancedLayout,
} from '@ks89/angular-modal-gallery';
import { Item } from 'src/models/item';


@Component({
  selector: 'app-quarterone',
  templateUrl: './quarterone.component.html',
  styleUrls: ['./quarterone.component.scss']
})
export class QuarteroneComponent {
  

  createItem = '';
q12020ItemsDoc: AngularFirestoreDocument<Item>;
q12020Items: Observable<q12020Item[]>;
showLoginUserInputForm = false;
showCreateUserInputForm = false;
modalImage: any;
responseType: any;

constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {
  this.afAuth.auth.onAuthStateChanged(user => {
    if (user) {
      // show email in welcome message
      // this.email = user.email;
      // call method that selects all items when user is authenticated
      this.selectItems(user.uid);
    }
  });
}

// async is not necessary here, but using it to control event loop
async addItem() {
  const id = this.afs.createId();
  const q12020Item = {
    value: this.createItem,
    id: id

  };



  
  await this.q12020ItemsDoc.collection<q12020Item>('posts').doc(id).set(q12020Item)
    .then(() => {
        // when successful clear input field value here
        this.createItem = '';
    })
    .catch((error) => {
      alert(error);
    });
}
buttonsConfigCustom: ButtonsConfig = {
  visible: true,
  strategy: ButtonsStrategy.CUSTOM,
  buttons: [
    KS_DEFAULT_BTN_FULL_SCREEN,
    KS_DEFAULT_BTN_DELETE,
    KS_DEFAULT_BTN_EXTURL,
    KS_DEFAULT_BTN_DOWNLOAD,
    KS_DEFAULT_BTN_CLOSE
  ]
};
// async is not necessary here, but using it to control event loop
async deleteItem(groceryItem: q12020Item) {
  await this.q12020ItemsDoc.collection<q12020Item>('GroceryItems').doc(groceryItem.id).delete()
    .catch((error) => { alert(error); });
}
// downloadFile(): any {
//   return this.http.get('http://localhost:8080/employees/download', {responseType: 'blob'});
// }
selectItems(uid: string) {
  this.q12020ItemsDoc = this.afs.doc<Item>('user/' + uid);
  this.q12020Items = this.q12020ItemsDoc.collection<q12020Item>('q12020Items').valueChanges();
  // // turn on logging if you want to see how the requests are sent
  // this.groceryItemsDoc.collection<GroceryItem>('GroceryItems').auditTrail().subscribe(console.log);
}







download(uid: string) {
  return this.q12020ItemsDoc = this.afs.doc<Item>('posts/' + uid);

}

maximizeImage(q12020Item) {
  this.modalImage = q12020Item;
  // this.noteSvc.setNotification(
  //   image.imageName,
  //   image.imagePath
  //   );
    $('.max-img-notification-btn').click();
}
}