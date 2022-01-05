import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from 'src/app/services/myservice.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private userService: UserServiceService,private ngxSpinner:NgxSpinnerService,private router:Router) { 
    
  }

  fullname=""
  password=""
  email=""
  confirmPassword=""
  messagePasswordErreur=""
  message=""
  formdata: FormGroup = new FormGroup({ });
 

  ngOnInit(): void {
    this.formdata = new FormGroup({ 
      fullname:new FormControl("",Validators.compose([
        Validators.required,
      ])),
      email: new FormControl("",Validators.compose([
        Validators.required,
      ])), 
      telephone: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.pattern("^6[0-9]{8}")
      ])), 
      password: new FormControl("",Validators.compose([
        Validators.required,
      ])),
      confirmPassword:new FormControl("",Validators.compose([
        Validators.required,
      ]))
   }); 
   
  }
  
  handleSubmit(data:any){
    console.log(data)
    
    this.messagePasswordErreur=""
    
    if(data.password!==data.confirmPassword){
      this.messagePasswordErreur="Enter the same password"
    }else{this.ngxSpinner.show();
    this.userService.createUser(data.telephone, data.password,data.fullname,data.email);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.ngxSpinner.hide(); 
      this.message=this.userService.message
       // this.contactService.telOwner=data.telephone
        this.router.navigate(["contacts/"+data.telephone])
      
    }, 3000);
    
     }
  }

  closeAlert(){
    this.message=""
  }
}
