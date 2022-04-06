import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-completed-projects',
  templateUrl: './completed-projects.component.html',
  styleUrls: ['./completed-projects.component.css']
})
export class CompletedProjectsComponent implements OnInit {

  projects: Array<any> = []
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getAllCompletedProject()
  }

  getAllCompletedProject() {
    this.projectService.getAllCompletedProjects().subscribe(resp => {
      this.projects = resp.data
     // console.log(resp);
    })
  }
}
