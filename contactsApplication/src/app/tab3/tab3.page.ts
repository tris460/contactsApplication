import { Component } from '@angular/core';
import { ContactInfoService } from '../services/contact-info.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contacts: any[];

  constructor(public alert: AlertController, public contactInfo: ContactInfoService) {
    this.contacts = contactInfo.contacts;
  }

  async showAlert(headerA, subheaderA, messageA, button) {
    const addAlert = await this.alert.create({
      header: headerA,
      subHeader: subheaderA,
      message: messageA,
      buttons: button
    });
    await addAlert.present();
  }
  async deleteContact(i) {
    await this.showAlert
    ('Eliminar contacto',
    '¿Está seguro de eliminar el contacto?',
    'Esta acción no se puede deshacer',
    [
      {
        text: 'OK',
        handler: () => {
          this.contacts.splice(i, 1);
        }
      },
      {
        text: 'Cancel',
      }
    ]);
  }
}
