import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {

  constructor(private http:HttpClient) { }
  pincodeapiurl='https://api.postalpincode.in/pincode/755036';
  getPinCode(){
    return this.http.get(this.pincodeapiurl);
  }
}
