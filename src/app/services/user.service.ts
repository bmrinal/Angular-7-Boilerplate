import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../config.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  async login(username, password) {
    this.http
      .post(config.apiBase + '/signin', {
        username,
        password
      })
      .subscribe({
        next: user => {}
      });
  }
}
