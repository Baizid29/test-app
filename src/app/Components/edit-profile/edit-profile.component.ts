import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PincodeService } from 'src/app/Services/pincode.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  constructor(private pincode:PincodeService){}


  getPin(){
    this.pincode.getPinCode().subscribe((res)=>{
      console.log(res);
    })
  }
  ngOnInit(){
    this.getPin();
  }

}
