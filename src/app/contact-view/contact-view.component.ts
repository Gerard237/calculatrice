//import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { Contact } from '../modeles/contact';
import { ContactService } from '../services/contact.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  contact:Observable<Contact[]>[]|any;
  valide=true;

  //Test
  constructor (private router: Router,private route: ActivatedRoute,
    private contactService: ContactService,
    private userService:UserServiceService){
    /*  this.contactService.test= true
      if (this.contactService.test == true) */ 
     
     
  }
  ngOnInit(): void {
    
    //this.contactService.emitContacts();
    //this.contactService.test= true;
      this.contactService.telOwner=this.route.snapshot.params['id'];    
      this.valide=this.contactService.valide;
      this.contactService.emitContacts();
      
  }

  //Test
  show()
  {
   
      this.contactService.test = true,
      this.contactService.valide=false,
      this.valide=this.contactService.valide
      this.contactService.emitContacts();
    this.router.navigate(["/contacts/liste/"+this.contactService.telOwner])
  }

  add(){
    
    this.router.navigate(["/contacts/new-contact/"+this.contactService.telOwner])
  }

 /* onSearch(DataForm:any){
    this.contact = this.contactService.searchContact(DataForm.keyword)
      .subscribe(data=>{
       this.contact=data
       console.log(data)
      }
       )
     
  }*/

  send(){
    alert("Interfaces des Messages")
  }

  logOut(){
    this.userService.isAuth=false;
    console.log(this.userService.isAuth);
    this.router.navigate([''])
  }

}
