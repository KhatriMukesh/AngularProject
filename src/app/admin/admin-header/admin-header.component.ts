import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  firstName: string = ""
  constructor() { }

  ngOnInit(): void {
    this.firstName = localStorage.getItem("firstName") as string
  }

}
