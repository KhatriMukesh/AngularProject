import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  //Projects
  addProject(project:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/projects",project)
  }
  getAllManager():Observable<any>{
    return this.httpClient.get("http://localhost:3000/managers")
  }
  getAllProject():Observable<any>{
    return this.httpClient.get("http://localhost:3000/projects")
  }
  deleteProject(projectId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/projects/"+projectId)
  }  
  getProjectById(projectId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/projects/"+projectId)
  }
  updateProject(project:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/projects",project)
  }
  getAllPendingProjects():Observable<any>{
    return this.httpClient.get("http://localhost:3000/pendingProjects")
  }
  getAllCompletedProjects():Observable<any>{
    return this.httpClient.get("http://localhost:3000/completedProjects")
  }



  getAllDeveloper():Observable<any>{
    return this.httpClient.get("http://localhost:3000/getAllDeveloper")
  }



  getAllTester():Observable<any>{
    return this.httpClient.get("http://localhost:3000/getAllTester")
  }


  getAllPriority():Observable<any>{
    return this.httpClient.get("http://localhost:3000/priority")
  }
  addModule(module:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/modules",module)
  }

  getAllModule():Observable<any>{
    return this.httpClient.get("http://localhost:3000/modules")
  }
  deleteModule(moduleId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/modules/"+moduleId)
  } 


  getModuleById(moduleId:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/modules/"+moduleId)
  }
  updateModule(module:any):Observable<any>{
    return this.httpClient.put("http://localhost:3000/modules",module)
  }


  getModulebyproject(project:any):Observable<any>{
    return this.httpClient.get("http://localhost:3000/module/"+project)
  }
  addTask(task:any):Observable<any>{
    return this.httpClient.post("http://localhost:3000/tasks",task)
  }
  getAllTask():Observable<any>{
    return this.httpClient.get("http://localhost:3000/tasks")
  }
  deleteTask(taskId:any):Observable<any>{
    return this.httpClient.delete("http://localhost:3000/tasks/"+taskId)
  } 

}
