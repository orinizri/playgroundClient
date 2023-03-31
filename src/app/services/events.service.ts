import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(
    private socket:Socket
    ) {}
  activeUsers$ = this.socket.fromEvent<any>('players');
  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  public sendAction(message: any) {
    console.log('events sendMessage: ', message)
    this.socket.emit('events', message);
  }

  public getPlayers(message: any) {
    console.log('players getPlayers: ', message)
    
    this.socket.emit('players', message);
  }

  public getNewAction = () => {
    this.socket.on('events', (message: any) =>{
      console.log("events getNewMessage", message)
      this.message$.next(message);
    });
    return this.message$.asObservable();
  }

  

  
}