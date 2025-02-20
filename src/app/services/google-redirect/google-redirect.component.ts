import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-google-redirect',
  template: '<p>Redirection en cours...</p>'
})
export class GoogleRedirectComponent implements OnInit {
  userName: string | null = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      const decodedToken: any = jwtDecode(token);
      this.userName = decodedToken.sub;
      console.log('userName', this.userName);
      if (this.userName) {
        localStorage.setItem('userName', this.userName);
      }
      this.router.navigate(['/dashboard']);
    }
  }
}
