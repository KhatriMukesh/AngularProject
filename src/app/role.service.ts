import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  changeStatus(roleId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/roleStatus/" + roleId)
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
  getuserName(userId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getuserName/" +userId)
  }



  approveUser(user: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/approveUser", user)
  }
  getPendingUsers(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/pendingusers")
  }
  getUsersById(userId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getUsersById/" +userId)
  }
  updatePassword(password: any): Observable<any> {
    return this.httpClient.put("http://localhost:3000/changePassword", password)
  }
  getAllBugStatus(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/bugStatus")
  }

  
  getAllStatus(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/status")
  }
  getTaskbyDevelop(devloper: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/getTaskbyDevelop", devloper)
  }
  getprojectbyStatus(status: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getprojectbyStatus/" + status)
  }
  getTaskbyProject(project: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/getTaskbyProject", project)
  }
  getUserbyRole(role: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getUserbyRole/" + role)
  }
  getModulesbyStatus(statusId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getModulebyStatus/" +statusId)
  }
  getTaskbyStatus(statusId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getTaskbyStatus/" +statusId)
  }
  getpriorityName(priorityId: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/getpriorityName/" +priorityId)
  }





  //Project Manager
  getAllUser(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/usersforProjectManager")
  }
  
  
}
