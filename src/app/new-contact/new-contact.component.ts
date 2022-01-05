import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../modeles/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {


  contactForm: FormGroup 

  constructor(private contactService : ContactService,
              private formBuilder: FormBuilder,
              private router: Router){ 
                this.contactForm=this.formBuilder.group({
                  name: '',
                  tel:  ''
                })   
              }

  ngOnInit(): void {  
    this.initForm()
  }

  initForm(){
    this.contactForm=this.formBuilder.group({
      name: '',
      tel:  new FormControl('',Validators.compose([Validators.pattern("^6[0-9]{8}")
      ,Validators.required]))
    })
  }

  onSubmitForm(){
      let formValue = this.contactForm?.value;
      const newContact = new Contact(formValue['name'],formValue['tel'])
      this.contactService.addContact(newContact);
      if(this.contactService.test === true) {this.router.navigate(['/contacts/liste/'+this.contactService.telOwner])}
      else {this.router.navigate(['/contacts/'+this.contactService.telOwner])}
  
    }


}
