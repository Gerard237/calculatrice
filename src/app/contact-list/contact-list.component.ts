import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from '../modeles/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  p:any
  contacts: Contact[]= []
  contactSubscription: Subscription | undefined

  constructor(private contactService : ContactService,
    private router: Router) {
      //Test
      this.contactSubscription = this.contactService.contactSubject.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
   /* this.contactService.emitContacts();*/}

  ngOnInit(): void {
    this.contactSubscription = this.contactService.contactSubject.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );
    this.contactService.emitContacts();
  }

  ngOnDestroy(){this.contactSubscription?.unsubscribe()}  
//Test
  /*add(){
    this.router.navigate(["/contacts/new-contact"])
  }*/

}
