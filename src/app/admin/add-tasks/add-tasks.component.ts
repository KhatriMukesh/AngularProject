import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { Observable } from 'rxjs';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private toastrService: ToastrService) { }

  taskName: string = ""
  moduleId: string = ""
  projectId: string = ""
  description: string = ""
  totalTime: string = ""
  priorityId: string = ""
  project: Array<any> = []
  module: Array<any> = []
  priority: Array<any> = []

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(resp => {
      this.project = resp.data
    })
    this.projectService.getAllPriority().subscribe(resp => {
      this.priority = resp.data
    })
  }
  getModulebyproject(event:any) {
    const project = event.target.value;
   //console.log(project)
    this.projectService.getModulebyproject(project).subscribe(resp => {
      this.module = resp.data
     // console.log(this.module)
    })
  }
  addTask() {
    console.log(this.projectId);
    
    let task = { taskName: this.taskName, description: this.description, totalTime: this.totalTime, projectId: this.projectId, moduleId: this.moduleId, priorityId: this.priorityId }
   // console.log(task)
    this.projectService.addTask(task).subscribe(resp => {
      if (resp.status == 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/admin/list-tasks")
      } else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }

    })

  }


}
