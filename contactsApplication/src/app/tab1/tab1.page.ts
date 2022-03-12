import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ContactInfoService } from '../services/contact-info.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // Attributes or properties are declared before constructor
  name: string;
  telephone: number;
  email: string;
  note: string;
  contacts: any[];

  constructor(public alert: AlertController, public contactInfo: ContactInfoService) {
    this.name= contactInfo.name;
    this.email= contactInfo.email;
    this.note= contactInfo.note;
    this.contacts= contactInfo.contacts;
  }

  // Declare functions
  async showAlert(headerA, subheaderA, messageA, button) {
    const addAlert = await this.alert.create({
      header: headerA,
      subHeader: subheaderA,
      message: messageA,
      buttons: button
    });
    await addAlert.present();
  }
  saveContact() {
    console.log(this.name);
    if(this.name !== '' && this.telephone > 0 && this.email !== ''){
      const newContact = {
        name: this.name,
        telephone: this.telephone,
        email: this.email,
        notes: this.note
      };
      this.contacts.push(newContact);
      console.log(this.contacts);
      this.showAlert('Exito', 'Contacto guardado', 'El contacto se ha guardado correctamente', ['OK']);
      this.name = '';
      this.email = '';
      this.note = '';
      this.telephone = 0;
    } else {
      this.showAlert('Error', 'Ha ocurrido un problema', 'Debe llenar los campos requeridos', ['OK']);
    }
  }
}
