import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {



  constructor(private storage:Storage) {}

  async storeInitialValues(){
    const accountName = await this.storage.get('accountName');
    if (accountName == null) {
      await this.storage.set('accountName', '');
    }
    const showNotifications = await this.storage.get('showNotifications');
    if (showNotifications == null) {
      await this.storage.set('showNotifications', false);
    }
    const reminderDate = await this.storage.get('reminderDate');
    if (reminderDate == null) {
      await this.storage.set('reminderDate', new Date().toISOString());
    }
  }

  }
















