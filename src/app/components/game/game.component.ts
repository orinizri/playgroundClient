import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service'
//services/events.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  role=''
  ActionList: string[] = [];
  numbers = new Array(20)

  constructor(private eventsService: EventsService){}

  ngOnInit(){
    this.eventsService.getNewAction().subscribe((action: string) => {
      this.ActionList.push(action);
    })
  }

  onClick(action: string, id: number) {
    console.log("action: ", action)
    console.log("id: ", id)
    this.eventsService.sendAction({action, id});
  }

  onSubmit(role: string){
    this.role = role;
    console.log("role",this.role)
  }

  nextGame() {
    
  }

  getPlayers(id : string) {
    this.eventsService.getPlayers(id) // .subscribe(() => {});
  }

  startGame() {

  }
}
