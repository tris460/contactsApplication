import { Component } from '@angular/core';
import { ContactInfoService } from '../services/contact-info.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  flag: boolean;
  contacts: any[];

  constructor(public contactInfo: ContactInfoService) {
    this.contacts = contactInfo.contacts;
    this.flag=true;
  }

  togglePressed() {
    if(this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  deleteContact(i) {
    this.contacts.splice(i, 1);
  }
}
