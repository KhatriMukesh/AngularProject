import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-project-team',
  templateUrl: './list-project-team.component.html',
  styleUrls: ['./list-project-team.component.css']
})
export class ListProjectTeamComponent implements OnInit {

  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  projectId: string = ""
  status: string = ""
  button: string = ""
  projects: Array<any> = []
  projectTeam: Array<any> = []

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.projects = resp.data
    })
  }
  getProjectTeambyProject() {
    // const project = event.target.value;
    // this.projectId = project 
    // console.log(this.projectId);
    
    this.projectService.getProjectTeambyProject(this.projectId).subscribe(resp => {
      // console.log(resp);
      
      this.projectTeam = resp.data
    })
  }
  action(user: any) {
    this.projectService.disableUserForProject(user).subscribe(resp => {
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getProjectTeambyProject();
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }
  addMemberTeam() {
    if (this.projectId == "") {
      this.toastrService.error("", "Please Choose Project", { timeOut: 3000 })
    }
    else {
      this.route.navigateByUrl("/admin/addTeamMember/" + this.projectId)
    }
  }
  // assignTask(user: any) {
  //   //console.log(user._id);
  //   localStorage.setItem("projectId", this.projectId)
  //   this.route.navigateByUrl("/admin/assignTask/" + user._id)
  // }
  assignTask(user: any) {
    //console.log(user);
    if (user.role == "62473b64ff3a1f2757fd9ce3") {
      localStorage.setItem("projectId", this.projectId)
      this.route.navigateByUrl("/admin/assignTask/" + user._id)
    }
    else if (user.role == "62473b5dff3a1f2757fd9ce1") {
      localStorage.setItem("projectId", this.projectId)
      this.route.navigateByUrl("/admin/assignModule/" + user._id)
    }
    else {
      this.toastrService.error("", "You can not assign Task to Tester!", { timeOut: 3000 })
    }
  }
}
