import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {

  name: string;
  telephone: number;
  email: string;
  note: string;
  contacts: any[];

  constructor() {
    this.name = '';
    this.telephone = 0;
    this.email= '';
    this.note = '';
    this.contacts = [];
   }
}
