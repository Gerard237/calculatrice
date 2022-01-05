import { Injectable } from '@angular/core';
import axios from 'axios';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  name=""
  message=""
  isAuth=false
  tel:String | undefined
  userLogin(telephone:String,password:String){
    axios.post('http://localhost:3000/users/login',{
      "telephone":telephone,
      "password":password
    }).then(
        (response)=>{
          if(response.data["message"] == "user not correct")
          {console.log(response)
          this.message=response.data["message"]}
          //this.contactService.telOwner=this.tel
          else{
            this.isAuth=true;
            this.name="ALI"
           // this.tel=telephone;
            this.message="";
          }
        }
    ).catch(
        (error)=>{ 
            console.log(error)
        }
    )
  }

  createUser(telephone:String,password:String,fullname:String,email:String){
    axios.post('http://localhost:3000/users/create',{
      "telephone":telephone,
      "password":password,
      "fullname":fullname,
      "email":email
    }).then(
        (response)=>{
          console.log(response);
         if(response.data["message"] == undefined )
          {this.isAuth=true;
         // this.message=response.data["message"]
         // console.log("OK1")
        this.message="";}
        }
    ).catch(
        (error)=>{
            if(error.response.data.code=="11000"){
              this.message="a user with this the password already exist"
            }
          console.log(error.response)
        }
    )
  }

  forgetPassword(telephone:String,password:String,email:String){
    axios.put('http://localhost:3000/users/resetpassword',{
      "telephone":telephone,
      "password":password,
      "email":email
    }).then(
        (response)=>{
          console.log(response.data['message'])
            this.message=response.data['message']
            alert(response.data['message'])
        }
    ).catch(
        (error)=>{

              this.message="enter correct email and tel"
            
          console.log(error.response)
        }
    )
  }
}
