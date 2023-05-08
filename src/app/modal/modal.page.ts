import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ModalPage implements OnInit {
  firstName = "";
  lastName = "";
  email = "";



  constructor(private nav: NavParams, private modalController:ModalController ) { }



  ngOnInit() {
    this.firstName = this.nav.get("firstName")
    this.lastName = this.nav.get("lastName")
    this.email = this.nav.get("email")
  }

  dismissModal() {
    this.modalController.dismiss({firstName: this.firstName, lastName: this.lastName, email:this.email})
  }
}
