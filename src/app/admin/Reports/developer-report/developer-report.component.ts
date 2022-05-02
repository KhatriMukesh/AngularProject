import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../../project.service';
import { RoleService } from 'src/app/role.service';


@Component({
  selector: 'app-developer-report',
  templateUrl: './developer-report.component.html',
  styleUrls: ['./developer-report.component.css']
})
export class DeveloperReportComponent implements OnInit {

  constructor(private roleService: RoleService, private projectService: ProjectService, private router: Router, private toastrService: ToastrService) { }

  devId: string = ""
  statusId: string = ""
  devlopers: Array<any> = []
  tasks: Array<any> = []
  status: Array<any> = []
  ngOnInit(): void {
    this.projectService.getAllDevs().subscribe(resp => {
      this.devlopers = resp.data
    })
    this.roleService.getAllStatus().subscribe(resp => {
      this.status = resp.data
    })
  }
  getTaskbyDev() {
    let devloper = {devId: this.devId,status: this.status}
    this.roleService.getTaskbyDevelop(devloper).subscribe(resp => {
     // console.log(resp);
      this.tasks = resp.data
    })
  }

}
