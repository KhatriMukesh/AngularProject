import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }
   //login 

   authentication(user: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/login", user)
  }



  //signup 
  //signupApi(user:any):Observable<any>{
  //  return this.httpClient.post("http://localhost:3000/saveuser",user)
  //}




  addrole(role:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/roles",role)
  }
  addUser(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/saveuser",user)

  }




  getAllRoles():Observable<any>{
    return this.httpClient.get("http://localhost:3000/roles")
  }

  sendOTP(user: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/sendotp", user)
  }
  otpVerification(user:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/otpVerification",user)
  }
  
}
