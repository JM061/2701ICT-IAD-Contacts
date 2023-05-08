import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {



  constructor(private storage:Storage) {}

  storeInitialValues(){
    this.storage.get('accountName').then((val)=> {
      if (val == null){
        this.storage.set('accountName', '')
      }
    });
    this.storage.get('showNotifications').then((val)=>{
      if (val ==null){
        this.storage.set('showNotifications', false);
      }
    });
    this.storage.get('reminderDate').then((val)=> {
      if (val == null){
        this.storage.set('reminderDate', new Date().toISOString());
      }
    });






  }














}

