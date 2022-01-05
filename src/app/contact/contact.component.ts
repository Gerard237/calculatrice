import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router :  Router,
              private contactService:ContactService,
              private ngxSpinner:NgxSpinnerService) { }

  @Input() contactName: string | undefined
  @Input() contactTel : string | undefined

  ngOnInit(): void {
    if(this.contactName != undefined) {this.contactService.name=this.contactName;}
  }

  Send() {
    this.ngxSpinner.show()
   
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.ngxSpinner.hide(); 
     
        console.log("OK")
        this.router.navigate(["contacts/new-message/"+this.contactService.telOwner]);
    }, 3000);
     //alert("Message Send");
  }
}
