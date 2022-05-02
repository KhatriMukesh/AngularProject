import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { RoleService } from '../role.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userId: string = ""
  userRole: string = ""
  cps: string = ""
  nps: string = ""
  cnps: string = ""
  constructor(private roleService: RoleService, private tsService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("email") as string
    this.roleService.getUsersById(this.userId).subscribe(resp => {
      this.userRole = resp.data[0].role
    })
  }

  updatePassword() {
    let password = {
      email: this.userId,
      cps: this.cps,
      nps: this.nps,
      cnps: this.cnps
    }
    this.roleService.updatePassword(password).subscribe(resp => {
      if (resp.status == 200) {
        this.tsService.success("", resp.msg, { timeOut: 3000 })
        if (this.userRole == "623ab7a53d0c2ae3f0b65251") {
          this.router.navigateByUrl("/admin/admin-dashboard")
        }
        else if (this.userRole == "62473b5dff3a1f2757fd9ce1") {
          this.router.navigateByUrl("/project-manager/project-manager-dashboard")
        }
        else if (this.userRole == "62473b64ff3a1f2757fd9ce3") {
          this.router.navigateByUrl("/developer/developer-dashboard")
        }
        else if (this.userRole == "624bc4f7c9105fb13a944f23") {
          this.router.navigateByUrl("/tester/tester-dashboard")
        }
      } else {
        this.tsService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }
}
