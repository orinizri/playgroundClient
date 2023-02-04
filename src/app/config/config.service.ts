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



  login(credentials: any) {
    // event.preventDefault()
    // now returns an Observable of Config
    return this.http.post<any>('http://127.0.0.1:3000/auth/login', {
      "username": credentials.value.username,
      "password": credentials.value.password
    }, httpOptions).subscribe({
      next: data => {
        this.access_token = data.access_token,
          console.log("logged in", data)
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    });
  }
}
