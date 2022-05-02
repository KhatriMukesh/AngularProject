import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-header',
  templateUrl: './developer-header.component.html',
  styleUrls: ['./developer-header.component.css']
})
export class DeveloperHeaderComponent implements OnInit {

  firstName : string =""
  constructor() { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem("firstName") as string
  }

}
