import { ConfigService } from './../config/config.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent {
  constructor(public ConfigService: ConfigService) {}
  profileDetails = {}
  ngOnInit() {
    this.profileDetails = this.ConfigService.profile()
  }
}
