import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private router:Router){}

  registerForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    mobile: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  get f(){
    return this.registerForm.controls;
  }

  registerData(data:any){
    if(data){
      localStorage.setItem('user',JSON.stringify(data));
      this.router.navigate(['login']);
    }
    console.log(data);

  }

}
