import { Component, AfterViewInit} from '@angular/core';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'endless';

  ngAfterViewInit(){
    firebase.analytics().logEvent('eventname', {

      'firsttimeuser': true,
      'username': 'cbawebdesign1@gmail.com'
    })
  }
}

 