import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { CreateAccountComponent } from './m-auth/create-account/create-account.component';
import { ForgotPasswordComponent } from './m-auth/forgot-password/forgot-password.component';
import { LoginCmpComponent } from './m-auth/login-cmp/login-cmp.component';
import { MAuthComponent } from './m-auth/m-auth.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service'
import { SmsComponent } from './sms/sms.component';
import { TriMsgComponent } from './tri-msg/tri-msg.component';


const routesAuth: Routes = [
  {path:'m-auth/login',component:LoginCmpComponent},
  {path:'m-auth/create_account',component:CreateAccountComponent},
  {path:'m-auth/forgot_password',component:ForgotPasswordComponent},
  {path:'',component:MAuthComponent},
  {path : 'contacts/new-contact/:id'/*,canActivate: [AuthGuardService]*/, component : NewContactComponent},
   {path : 'contacts/:id'/*,canActivate: [AuthGuardService]*/, component : ContactViewComponent},
   {path : 'contacts/liste/:id'/*,canActivate: [AuthGuardService]*/, component : ContactListComponent},
   {path : 'contacts/new-message/:id'/*,canActivate: [AuthGuardService]*/, component : NewMessageComponent},
   //{path : 'contacts/messages/:id',canActivate: [AuthGuardService], component : SmsComponent},
   {path : 'contacts/messages/:id'/*,canActivate: [AuthGuardService]*/, component : TriMsgComponent},
   {path:"not-found", component:NotFoundComponent},
	{path:"**", redirectTo: "not-found"} ,
];

/*const routesContact : Routes = [
   {path : 'contacts/new-contact/:id',canActivate: [AuthGuardService], component : NewContactComponent},
   {path : 'contacts/:id',canActivate: [AuthGuardService], component : ContactViewComponent},
   {path : 'contacts/liste/:id',canActivate: [AuthGuardService], component : ContactListComponent},
 ]*/

@NgModule({
  imports: [RouterModule.forRoot(routesAuth)/*,RouterModule.forRoot(routesContact)*/],
  exports: [RouterModule]
})
export class AppRoutingModule { }