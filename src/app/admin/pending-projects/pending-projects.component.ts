import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-pending-projects',
  templateUrl: './pending-projects.component.html',
  styleUrls: ['./pending-projects.component.css']
})
export class PendingProjectsComponent implements OnInit {

  projects: Array<any> = []
  constructor(private projectService: ProjectService) { }
  

  ngOnInit(): void {
    this.getAllPendingProject()
    
  }
  
  getAllPendingProject() {

    this.projectService.getAllPendingProjects().subscribe(resp => {
      this.projects = resp.data
      console.log(resp);
    })
  }

}
