import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sms } from '../modeles/sms';
import { SmsService } from '../services/sms.service';

@Component({
  selector: 'tri-msg',
  templateUrl: './tri-msg.component.html',
  styleUrls: ['./tri-msg.component.css']
})
export class TriMsgComponent implements OnInit {
  p:any
  valeurResearch=""
  messages: Sms[]= []
  smsSubscription: Subscription | undefined

  constructor(private smsService : SmsService,
    private router: Router) {
      //Test
      this.smsSubscription = this.smsService.smsSubject.subscribe(
      (messages: Sms[]) => {
        this.messages = messages;
      }
    );
   /* this.contactService.emitContacts();*/}

  ngOnInit(): void {
    this.smsSubscription = this.smsService.smsSubject.subscribe(
      (messages: Sms[]) => {
        this.messages = messages;
      }
    );
    this.smsService.emitMessages();
  }

  ngOnDestroy(){this.smsSubscription?.unsubscribe()}  
//Test
  /*add(){
    this.router.navigate(["/contacts/new-contact"])
    tabll = tabll.filter(tabll => { return ((remove_accents(tabll[champ].toUpperCase())).includes(remove_accents(((`${valeurResearch}`).trim()).toUpperCase()))) })
  }*/
  search(){
    console.log("ok------"+this.valeurResearch)
    if(this.valeurResearch==""){

    }else{
      this.messages=this.messages.filter((res)=>{return (res.name.toUpperCase()).includes(this.valeurResearch.trim().toUpperCase()),console.log(res)})
      console.log(this.messages)
    }
  }
}
