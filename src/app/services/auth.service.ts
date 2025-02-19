import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7202/api/jwtauth/auth';

  constructor(private http: HttpClient,private router: Router) {}

  login(email: string | null | undefined, password: string | null | undefined) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }



  register(username: string | null | undefined, email: string | null | undefined, password: string | null | undefined): Observable<string> {
    const body = { username, email, password };
    return this.http.post(this.apiUrl + '/register', body, { responseType: 'text' });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
