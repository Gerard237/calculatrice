import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  constructor(private router :  Router) { }

  @Input() SmsName: string | undefined
  @Input() SmsMessage: string | undefined
  @Input() SmsTime: Date | undefined

  ngOnInit(): void {
  }

  Send() {
    //this.router.navigate(["/new-message"]);
     alert("Message Send");
  }
}
