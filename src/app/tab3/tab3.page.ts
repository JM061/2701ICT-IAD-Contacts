import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  accountName: string;
  showNotifications: boolean;
  reminderDate: string;

  constructor(private storage: Storage) {
    this.storage.create();
  }

  getReminderValues() {
    this.storage.get('accountName').then((val) => {
      this.accountName = val;
    });
    this.storage.get('showNotifications').then((val) => {
      this.showNotifications = val;
    });
    this.storage.get('reminderDate').then((val) => {
      this.reminderDate = val;
    });
  }

  addValues() {
    this.storage.set('accountName', this.accountName);
    this.storage.set('showNotifications', this.showNotifications);
    this.storage.set('reminderDate', this.reminderDate);
    console.log(
      'Account name:',
      this.accountName,
      'Notifications?',
      this.showNotifications,
      'Date of Reminder:',
      this.reminderDate
    );
  }
}
