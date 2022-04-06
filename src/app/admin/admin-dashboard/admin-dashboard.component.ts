import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  AD(){
    this.router.navigateByUrl("/admin/addroles")
  }

  BD(){
    this.router.navigateByUrl("/admin/listrole")
  }
  CD(){
    this.router.navigateByUrl("/admin/addusers")
  }
  DD(){
    this.router.navigateByUrl("/admin/listusers")
  }
  ED(){
    this.router.navigateByUrl("/admin/addprojects")
  }
  FD(){
    this.router.navigateByUrl("/admin/listprojects")
  }
  GD(){
    this.router.navigateByUrl("/admin/pending-projects")
  }
  HD(){
    this.router.navigateByUrl("/admin/completed-projects")
  }
  ID(){
    this.router.navigateByUrl("/admin/add-project-team")
  }
  JD(){
    this.router.navigateByUrl("/admin/list-project-team")
  }
  KD(){
    this.router.navigateByUrl("/admin/add-modules")
  }
  LD(){
    this.router.navigateByUrl("/admin/list-modules")
  }
  MD(){
    this.router.navigateByUrl("/admin/add-tasks")
  }
  ND(){
    this.router.navigateByUrl("/admin/list-tasks")
  }
  OD(){
    this.router.navigateByUrl("/admin/listusers")
  }
  PD(){
    this.router.navigateByUrl("/admin/pending-approval")
  }
}
