import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/admin/project.service';

@Component({
  selector: 'app-completed-project',
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.css']
})
export class CompletedProjectComponent implements OnInit {

  projectManagerId: string = ""
  projects: Array<any> = []
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllCompletedProject()
  }
  
  getAllCompletedProject() {
    this.projectManagerId = localStorage.getItem("userId") as string

        
    this.projectService.getAllCompletedProject(this.projectManagerId).subscribe(resp => {
      this.projects = resp.data
  
    })
  }

}
