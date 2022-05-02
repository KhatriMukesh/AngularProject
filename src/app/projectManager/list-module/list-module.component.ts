import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';
import { RoleService } from 'src/app/role.service';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {
  
  modules: Array<any> = []
  projectManagerId: string = ""
  projectId: string = ""
  projects: Array<any> = []
  tasks: Array<any> = []

  constructor(private roleService: RoleService, private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.projectManagerId = localStorage.getItem("userId") as string
    // console.log(this.projectManagerId);
    this.getAllModules()
  }

  getAllModules() {
    this.projectService.getAllProjects(this.projectManagerId).subscribe(resp => {
      this.projects = resp.data
      console.log(this.projects);
      
    })
  }

  getTaskbyProject() {
    this.projectService.getModulebyProject(this.projectId).subscribe(resp => {
      console.log(resp);
      this.modules = resp.data
    })
  }

  deleteModule(moduleId: any) {
    this.projectService.deleteModules(moduleId).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllModules()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  editModule(moduleId: any) {
    this.route.navigateByUrl("/project-manager/edit-module/" + moduleId)
  }
  
}
