import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private httpClient:HttpClient ) { }
  getRoles(): Observable<any> {//devloper,tester
    return this.httpClient.get("http://localhost:3000/roles")
  }
  addRole(role: any): Observable<any> {
    //console.log(role);
    //node API
    return this.httpClient.post("http://localhost:3000/roles", role)

  }
  getAllRoles(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/roles")
  }
  deleteRole(roleId: any): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/roles/" + roleId)
  }
  getRoleById(roleId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/roles/" + roleId)
  }
  updateRole(role: any): Observable<any> {
    return this.httpClient.put("http://localhost:3000/roles", role)
  }

  

  getAllUsers(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/users")
  }
  deleteUser(userId: any): Observable<any> {
    return this.httpClient.delete("http://localhost:3000/users/" + userId)
  }
  disableUser(user: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/disableuser", user)
  }



  approveUser(user: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/approveUser", user)
  }
  getPendingUsers(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/pendingusers")
  }
  
}
