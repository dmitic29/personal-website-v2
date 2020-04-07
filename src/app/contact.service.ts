import { Injectable } from '@angular/core';
import '../assets/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact = {
    name: '',
    phone: '',
    email: '',
    about: ''
  };

  constructor() { }

  getContact(c) {
    this.contact = c;
    this.doContact();
  }

  doContact() {
    Email.send({
      SecureToken: 'fddaa199-c978-4224-ba48-29f6c4e1bf5b',
      To : 'dimitrije.mitic29@yahoo.com',
      From : `dimitrije.mitic29@gmail.com`,
      Subject : 'PERSONAL WEBISTE CONTACT',
      Body : `
        <b>Name:</b><br/>${this.contact.name} <br/>
        <b>Phone:</b><br/>${this.contact.phone} <br/>
        <b>Email Address:</b><br/>${this.contact.email} <br/>
        <b>Reason for contact:</b><br/>${this.contact.about} <br/>
        <br><br> <b>~End of Message.~</b>
        `
      }).then(_ => console.log('Email sent!'))
      .catch(err => console.log(err));
  }
}
