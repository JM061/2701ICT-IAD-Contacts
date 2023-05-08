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
    this.storage.create();//creates storage
    this.getReminderValues();
  }

  //gets the values from the user inputs
  async getReminderValues() {
    this.accountName = await this.storage.get('accountName') || '';
    this.showNotifications = await this.storage.get('showNotifications') || false;
    this.reminderDate = await this.storage.get('reminderDate') ||new Date().toISOString();

  }

  //adds the values from the user input to the ionic storage module
  async addValues() {
    await this.storage.set('accountName', this.accountName);
    await this.storage.set('showNotifications', this.showNotifications);
    await this.storage.set('reminderDate', this.reminderDate);
  }

}
