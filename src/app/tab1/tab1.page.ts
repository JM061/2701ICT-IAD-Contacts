import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponentModule, CommonModule],
})
export class Tab1Page {
  contacts = [{ firstName: 'Fran', lastName: 'Jipani', email: 'f.jipani@griffith.edu.au' },
  { firstName: 'Jacob', lastName: 'Murphy', email: 'jacob.murphy@griffithuni.edu.au' },
  { firstName: 'Bob', lastName: 'Jane', email: 'BJ@griffithuni.edu.au' }]
  constructor(private modalController: ModalController) { }


  deletecontact(index) {
    this.contacts.splice(index, 1);
  }

  async editcontact(index) {
    let modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { firstName: this.contacts[index].firstName, lastName: this.contacts[index].lastName, email: this.contacts[index].email }
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log(data);
        this.contacts[index] = (data.data);
      });
    return modal.present();
  }



  async addcontact() {
    let modal = await this.modalController.create({
      component: ModalPage,
      componentProps: [],
    });

    modal.onDidDismiss()
      .then((data) => {
        console.log(data);
        this.contacts.push(data.data);
      });
    return modal.present();
  }
}
