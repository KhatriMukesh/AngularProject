import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-pending-project',
  templateUrl: './pending-project.component.html',
  styleUrls: ['./pending-project.component.css']
})
export class PendingProjectComponent implements OnInit {
  projectManagerId: string = ""
  projects: Array<any> = []

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllPendingProject()
  }
  getAllPendingProject() {
    this.projectManagerId = localStorage.getItem("userId") as string
    //console.log(this.projectManagerId);
        
    this.projectService.getAllPendingProject(this.projectManagerId).subscribe(resp => {
      this.projects = resp.data
     // console.log(resp);
    })
  }

}
