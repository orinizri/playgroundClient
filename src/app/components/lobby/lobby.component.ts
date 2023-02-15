import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
  constructor(private router: Router) {

  }
  createGame() {
    const uuid = uuidv4();
    this.router.navigate(['/game', uuid]);
  }
}
