import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7202/api/jwtauth/auth';

  constructor(private http: HttpClient,private router: Router) {}

  login(email: string | null | undefined, password: string | null | undefined): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }


  loginWithFacebook(): void {
    window.location.href = 'https://localhost:7202/api/jwtauth/auth/facebook';
  }
  loginWithGoogle(): void {
    window.location.href = 'https://localhost:7202/api/jwtauth/auth/google';
  }
  loginWithGitHub(): void {
    window.location.href = 'https://localhost:7202/login-github';
  }


  register(formData: any): Observable<string> {
    return this.http.post(this.apiUrl + '/register', formData, { responseType: 'text' });
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
