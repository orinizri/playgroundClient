import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  activeUsers$ = this.socket.fromEvent<any>('sendMessage');

  constructor(private socket: Socket) {
  }

  sendMessage(msg: any) {
    console.log("🚀 ~ file: web-socket.service.ts:16 ~ WebSocketService  ~ sendMessage:")
    this.socket.emit('sendMessage', msg);
  }
  close() {
    console.log("🚀 ~ file: web-socket.service.ts:20 ~ WebSocketService  ~ close:")
    this.socket.disconnect();
  }

  public userPing(userName: any): void {
    console.log("🚀 ~ file: web-socket.service.ts:25 ~ WebSocketService  ~ userPing:")
    this.sendMessage(userName);
  }
}