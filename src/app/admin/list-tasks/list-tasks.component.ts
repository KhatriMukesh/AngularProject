import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks: Array<any> = []
  constructor(private projectService: ProjectService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.getAllTasks()
  }

  getAllTasks() {
    this.projectService.getAllTask().subscribe(resp => {
     console.log(resp);
      this.tasks = resp.data
    })
  }
  deleteTask(taskId: any) {
    this.projectService.deleteTask(taskId).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllTasks()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  editTask(taskId: any) {
    this.route.navigateByUrl("/admin/edit-tasks/"+taskId)
  }
}
