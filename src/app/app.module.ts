import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCmpComponent } from './m-auth/login-cmp/login-cmp.component';
import { MAuthComponent } from './m-auth/m-auth.component';
import { CreateAccountComponent } from './m-auth/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { UserServiceService } from './services/user-service.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ForgotPasswordComponent } from './m-auth/forgot-password/forgot-password.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ContactService } from './services/contact.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { NewMessageComponent } from './new-message/new-message.component';
import { TriMsgComponent } from './tri-msg/tri-msg.component';
import { SmsComponent } from './sms/sms.component';
import { SmsService } from './services/sms.service';
//import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    LoginCmpComponent,
    MAuthComponent,
    CreateAccountComponent,
    ContactComponent,
    ContactListComponent,
    ContactViewComponent,
    NewContactComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    NewMessageComponent,
    TriMsgComponent,
    SmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
   // MatPaginatorModule
  ],
  providers: [UserServiceService,AuthGuardService,ContactService,SmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
