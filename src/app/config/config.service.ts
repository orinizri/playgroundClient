import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders()
}

httpOptions.headers.append('Access-Control-Allow-Origin', '*');
httpOptions.headers.append('Content-Type', 'application/json');
httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  access_token = '';
  errorMessage = '';
  profileDetails = {};
  signedIn = false;



  login(credentials: any) {
    // now returns an Observable of Config
    return this.http.post<any>('http://127.0.0.1:3000/auth/login', {
      "username": credentials.value.username,
      "password": credentials.value.password
    }, httpOptions).subscribe({
      next: data => {
        this.access_token = data.access_token
        this.signedIn = true;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }


  profile() {
    console.log("this.access_token", this.access_token)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.access_token}` });
  let options = { headers: headers };
    return this.http.get<any>('http://127.0.0.1:3000/profile', options).subscribe({
      next: data=> this.profileDetails = data,
      error: error => error
    })
  }
}
