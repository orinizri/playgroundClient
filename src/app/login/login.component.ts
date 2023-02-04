import { ConfigService } from './../config/config.service';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  constructor(public ConfigService: ConfigService, private formBuilder: FormBuilder,) {}

  credentials = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })





}
