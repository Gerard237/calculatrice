import { Injectable } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
import { Sms } from '../modeles/sms';
import { ContactService } from './contact.service';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

    valide=true
  //telOwner="";
    test=false
    limite=20;

    private messages : Sms[] 
    smsSubject = new Subject<Sms[]>()
    constructor(private userService:UserServiceService,
                private contactService:ContactService){
        //this.telOwner=this.userService.tel
        

        this.messages= [
            {
                name: "fye",
                message:"Hello world",
                number:"695326589",
                time: new Date()
            }
        ];
      //  this.emitContacts();
    }

    emitMessages(){
        //this.telOwner="670446436"//this.userService.tel
        console.log(this.contactService.telOwner)
        if(this.test == true){
        axios.get('http://localhost:3000/message/all/'+this.contactService.telOwner+'?page=1&limit='+this.limite).then((res)=>{
            this.messages=[]
            for(let exp of res.data['data']){
                delete exp['_id'];
                delete exp["user"];
                delete exp["__v"];
                delete exp["createdAt"];
                delete exp["updatedAt"]

                this.messages.push(exp)
            }
            this.smsSubject.next(this.messages.slice());
        })
        .catch((error)=>{
         console.log(error)});
        }  
        //this.smsSubject.next(this.messages.slice());
    }

    addMessages(Sms: Sms){
        axios.post('http://localhost:3000/message/send/'+this.contactService.telOwner,{
            "user_tel":Sms.name,
            "message":Sms.message,
            "send_date":Sms.time,
            "contact":Sms.number
        }) .then((res)=>{this.messages.push(Sms);
            alert("Ajout Effectué avec succès");
            this.limite=this.limite+1;
            this.emitMessages()
            })
        .catch((error)=>{
            alert(error)
        })
        
    }
}
