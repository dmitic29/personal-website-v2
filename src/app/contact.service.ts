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
      Host : 'smtp.gmail.com',
      Username: 'mailserverdimitrimitic@gmail.com',
      Password: 'mailserver123',
      To : 'dimitrije.mitic29@gmail.com',
      From : `mailserverdimitrimitic@gmail.com`,
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
