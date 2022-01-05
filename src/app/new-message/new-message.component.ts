import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  @Input() name:string | undefined
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    //this.name=this.userService.name
  }

  send(){
    alert("Message Envoyé")
  }

}
