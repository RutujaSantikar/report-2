import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

 username='';
 password='';
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private loginService : LoginService) { }

  onSubmit() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.loginService.login(username, password).subscribe((response:any) => {
      // localStorage.setItem('usrName', response.usrName);
      localStorage.setItem('usrId', response.data.usrId);
      localStorage.setItem('usrPriviledge', response.data.usrPriviledge);
      localStorage.setItem('disId', response.data.disId);
      localStorage.setItem('divId', response.data.divId);
      localStorage.setItem('sudId', response.data.sudId);
      // localStorage.setItem('usrPassword', response.usrPassword);
      console.log(response);
      this.router.navigate(['/report']);
    } )


  }

}
// 9421585389
