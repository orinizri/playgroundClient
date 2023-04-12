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
  playerOne = '';
  playerTwo = '';
  playerOneTurn = true;
  question =''
  constructor(private eventsService: EventsService){}

  ngOnInit(){
    // this.eventsService.getNewAction().subscribe((action: string) => {
    //   console.log("ng init action", action)
    //   this.ActionList.push(action);
    // })
    this.eventsService.initializePlayers().subscribe((players: any) => {
      if (!this.playerOne && players?.playerOne) this.playerOne = players.playerOne;
      if (!this.playerTwo && players?.playerTwo) this.playerTwo = players.playerTwo;
    })
  }

  submitQuestion(event: any) {
    console.log("event~ ", event)
    console.log("question", this.question)
    // validate playing user
    // take player input 
  }
  onClick(action: string, cardId: number, event: any) {
    if ((event.target.parentElement.parentElement.classList[1].split('-')[1] === 'one' &&
      !this.playerOneTurn) || (event.target.parentElement.parentElement.classList[1].split('-')[1] === 'two' &&
      this.playerOneTurn) 
    ) return;

    this.eventsService.sendAction({ action, cardId, playerOneTurn: this.playerOneTurn });
    this.playerOneTurn = !this.playerOneTurn;
  }

  nextGame() {
    
  }

  initializePlayers() {
    this.eventsService.initializePlayers().subscribe((users) => {
      if (!this.playerOne && users.playerOne) 
        this.playerOne = users.playerOne
      if (!this.playerTwo && users.playerTwo) 
        this.playerTwo = users.playerTwo

      
    });
  }
  
  startGame() {
    this.eventsService.getNewAction().subscribe((actions) => {
      console.log("gameComp startGame", actions)
    });
  }
}
