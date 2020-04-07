import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit {
  submitClicked = false;
  details: FormGroup;

  constructor(fb: FormBuilder, private contactService: ContactService, private router: Router) {
    this.details = fb.group({
      Name: ['', Validators.required],
      Phone: ['', Validators.minLength(6)],
      Email: ['', [Validators.email, Validators.required]],
      About: ['', Validators.minLength(2)]
    });
  }

  ngOnInit(): void {
  }

  doContact(): void {
    this.contactService.getContact({
      name: this.details.value.Name,
      phone: this.details.value.Phone,
      email: this.details.value.Email,
      about: this.details.value.About
    });

    setTimeout(() => {
      this.router.navigate(['home']);
    }, 2000);
  }
}
