import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(
    private socket: Socket
    ) {}
  players$ = this.socket.fromEvent<any>('players');
  public playerOneTurn$ : BehaviorSubject<boolean> = new BehaviorSubject(true);;
  public action$: BehaviorSubject<string> = new BehaviorSubject('');

  public sendAction(action: any) {
    console.log('actions sendAction event service: ', action)
    this.socket.emit('actions', action);
    this.playerOneTurn$.next(!this.playerOneTurn$)
    console.log("this.playerOneTurn$", this.playerOneTurn$)
  }


  public initializePlayers() {
    this.socket.emit('players', { playerId: this.socket.ioSocket.id });
    return this.players$;
  }

  public getNewAction = () => {
    this.socket.on('actions', (action: any, playerOneTurn: boolean) =>{
      console.log("front events getNewAction", action, playerOneTurn)
      this.action$.next(action);
    });
    return this.action$.asObservable();
  }

  

  
}