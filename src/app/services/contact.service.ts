import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
import { Contact } from '../modeles/contact';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    valide=true
  telOwner="";
    page=1;
    limit=6;
    test=false
    name="";

    private contacts : Contact[] 
    contactSubject = new Subject<Contact[]>()

    constructor(private userService:UserServiceService,private http:HttpClient){
        //this.telOwner=this.userService.tel
        this.contacts= [
            {
                name: "fye",
                telephone: "45632"
            }
        ];
      //  this.emitContacts();
    }

    emitContacts(){
        //this.telOwner="670446436"//this.userService.tel
        console.log(this.telOwner)
        if(this.test == true){
        axios.get('http://localhost:3000/contacts/user/'+this.telOwner+'?page='+1+'&'+'limit='+this.limit).then((res)=>{
            
            /*delete res.data["_id"];
            delete res.data["user"];
            delete res.data["__v"];
            delete res.data["createdAt"];
            delete res.data["updatedAt"]
            this.contacts=res.data
            console.log(this.contacts)
            this.contactSubject.next(this.contacts.slice());*/
            console.log(res.data['data'])
            this.contacts=[]
            for(let exp of res.data['data']){
                delete exp['_id'];
                delete exp["user"];
                delete exp["__v"];
                delete exp["createdAt"];
                delete exp["updatedAt"]

                this.contacts.push(exp)
            }
            this.contactSubject.next(this.contacts.slice());
        })
        .catch((error)=>{
         console.log(error)});
        }  
    }

    addContact(contact: Contact){
        axios.post('http://localhost:3000/contacts/create/'+this.telOwner,{
            "telephone":contact.telephone,
            "name":contact.name,
        }) .then((res)=>{this.contacts.push(contact);
            alert("Ajout Effectué avec succès");
            this.limit=this.limit+1;
            this.emitContacts()
            })
        .catch((error)=>{
            alert(error)
        })
        
    }
   /* searchContact(keyword:string){
        let host = 'http://localhost:3000/contacts/user/'+this.telOwner+'?page='+1+'&'+'limit='+this.limit+'&name_like='+keyword
        let temp=[]
       
        return this.http.get<Contact[]>(host);

        
        //this.http.get<Contact[]>(host+'/products?name_like='+keyword);
    }*/
}
