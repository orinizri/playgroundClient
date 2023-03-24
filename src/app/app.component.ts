import { EventsService } from './services/events.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playgroundClient';

  newMessage = '';
  messageList: string[] = [];

  constructor(private eventsService: EventsService){

  }

  ngOnInit(){
    this.eventsService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    })
  }

  sendMessage() {
    this.eventsService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
  

}
