import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),

    password: new FormControl('',[Validators.required])
  })

  get f(){
    return this.loginForm.controls;
  }



  registerData(data:any){
    if(data){
      let user=localStorage.getItem('user');
      let username=user && JSON.parse(user).username;
      let userPassword= user && JSON.parse(user).password;
      if(username === data.username && userPassword === data.password){
        this.router.navigate(['profile']);
      }else{
        alert('username or password is incorrect');
      }
    }

  }
}
