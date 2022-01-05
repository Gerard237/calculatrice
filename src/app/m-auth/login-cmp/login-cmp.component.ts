import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-login-cmp',
  templateUrl: './login-cmp.component.html',
  styleUrls: ['./login-cmp.component.css']
})
export class LoginCmpComponent implements OnInit {
  formdata = new FormGroup({});
  
  constructor(private userService: UserServiceService,private ngxSpinner:NgxSpinnerService,private router:Router,
    private contactService:ContactService) {this.message=this.userService.message; }
  message: string=this.userService.message;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      telephone: new FormControl("698782615", Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.pattern("^6[0-9]{8}")
      ])),
      password: new FormControl("f123456", Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
    this.message=this.userService.message
  }
  
  handleSubmit(data: any) {
    this.ngxSpinner.show()
    
    this.userService.userLogin(data.telephone, data.password);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.ngxSpinner.hide(); 
      this.message=this.userService.message
      if(this.message==""){
        console.log("OK")
        this.router.navigate(["contacts/"+data.telephone])
      }
    }, 3000);
    // this.message=this.userService.message;
    // console.log(this.message)
    //    if(this.message==""){
    //    // this.contactService.telOwner=data.telephone
    //    //this.userService.isAuth=true
    //    console.log(this.userService.isAuth); 
    //    this.router.navigate(["/contacts/"+data.telephone])
    //   }
    //   else {
    //     this.router.navigate(["/m-auth/login"])
    //   }
  }

  closeAlert(){
    this.message=""
  }
}
