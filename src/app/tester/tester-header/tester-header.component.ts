import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tester-header',
  templateUrl: './tester-header.component.html',
  styleUrls: ['./tester-header.component.css']
})
export class TesterHeaderComponent implements OnInit {

  constructor() { }
  firstName: string=""

  ngOnInit(): void {
    this.firstName = localStorage.getItem("firstName") as string
  }

}
