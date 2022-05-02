import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-manager-header',
  templateUrl: './project-manager-header.component.html',
  styleUrls: ['./project-manager-header.component.css']
})
export class ProjectManagerHeaderComponent implements OnInit {

  constructor() { }
  firstName:string =""

  ngOnInit(): void {
    this.firstName = localStorage.getItem("firstName") as string
  }

}
