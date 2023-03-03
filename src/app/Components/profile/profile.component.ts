import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router:Router){}
  userData:any;
  data:any;

getdata(){
  this.userData=localStorage.getItem('user');
  this.data=JSON.parse(this.userData);
}

logout(){
  localStorage.removeItem('user');
  this.router.navigate(['']);
}
ngOnInit(){
  this.getdata();
}


}
