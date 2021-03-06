import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/role.service';


@Component({
  selector: 'app-developer-dashboard',
  templateUrl: './developer-dashboard.component.html',
  styleUrls: ['./developer-dashboard.component.css']
})
export class DeveloperDashboardComponent implements OnInit {
  users: Array<any> = []
  projects: Array<any> = []
  projectTitle: Array<any> = []
  tasks: Array<any> = []
  pendingTasks: Array<any> = []
  devId: string = ""
  firstName : string =""

  constructor(private roleService: RoleService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem("firstName") as string
    this.devId = localStorage.getItem('userId') as string

    this.projectService.getProjectforDev(this.devId).subscribe(resp => {
      this.projects = resp.data.length
        //this.projectTitle = resp.data.projectId.projectTitle     
    })
    let devId = { devId: this.devId }
    this.roleService.getTaskbyDevelop(devId).subscribe(resp => {
      this.tasks = resp.data.length
    })
    this.projectService.getPendingTaskforDev(this.devId).subscribe(resp => {
      this.pendingTasks = resp.data.length
    })
  
  }

}
