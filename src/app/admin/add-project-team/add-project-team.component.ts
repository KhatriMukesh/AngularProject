import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-add-project-team',
  templateUrl: './add-project-team.component.html',
  styleUrls: ['./add-project-team.component.css']
})
export class AddProjectTeamComponent implements OnInit {

  constructor(private projectService:ProjectService,private router:Router,private toastrService:ToastrService) { }

  projectId:string=""
  projectManager:Array<any>=[]
  developer:Array<any>=[]
  tester:Array<any>=[]
  role: string = ""

  managers: Array<any> = []
  developers:Array<any>=[]
  testers:Array<any>=[]
  project: Array<any> = []

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.project = resp.data
    })  
    this.projectService.getAllManagers().subscribe(resp => {
        this.managers = resp.data  
      })
      this.projectService.getAllDeveloper().subscribe(resp => {
        this.developers = resp.data  
      })
      this.projectService.getAllTester().subscribe(resp => {
        this.testers = resp.data  
      })
  }
  addProjectTeam() {
    console.log(this.developer);
    console.log(this.tester);
    console.log(this.projectManager);

    for (let i = 0; i < this.developer.length; i++) {
      this.projectService.addProjectTeam({
        projectId: this.projectId,
        projectTeamMember: this.developer[i],
        role : "62473b64ff3a1f2757fd9ce3"
      }).subscribe()
    }

    for (let i = 0; i < this.projectManager.length; i++) {
      this.projectService.addProjectTeam({
        projectId: this.projectId,
        projectTeamMember: this.projectManager[i],
        role: "62473b5dff3a1f2757fd9ce1"
      }).subscribe()
    }

    for (let i = 0; i < this.tester.length; i++) {
      this.projectService.addProjectTeam({
        projectId: this.projectId,
        projectTeamMember: this.tester[i],
        role: "624bc4f7c9105fb13a944f23"
      }).subscribe()
    }

    this.router.navigateByUrl("/admin/list-project-team")

     
  }

}
