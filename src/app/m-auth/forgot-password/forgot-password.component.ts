import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userService:UserServiceService,private router:Router) { }

  password=""
  confirmPassword=""
  messagePasswordErreur=""
  email=""
  message=""
  formdata: FormGroup = new FormGroup({ });

  ngOnInit(): void {
    this.formdata = new FormGroup({ 
      telephone: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(9)
      ])),
      email: new FormControl("",Validators.compose([
        Validators.required,
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
    }else{
    this.userService.forgetPassword(data.telephone, data.password,data.email);
    this.message=this.userService.message
    
    console.log(this.message)
      this.router.navigate(["/m-auth/login"])
     }
  }

  closeAlert(){
    this.message=""
  }


}
