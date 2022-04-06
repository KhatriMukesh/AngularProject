import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/role.service';


@Component({
  selector: 'app-listrole',
  templateUrl: './listrole.component.html',
  styleUrls: ['./listrole.component.css']
})
export class ListroleComponent implements OnInit {
  roles: Array<any> = []
  status: string = ""

  constructor(private roleService: RoleService, private toastrService: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.getAllRoles()
  }
  getAllRoles() {
    this.roleService.getAllRoles().subscribe(resp => {
      this.roles = resp.data
      if (resp.data.isActive == true) {
        this.status = "Active"
      }
      else if (resp.data.isActive == false) {
        this.status = "In-Active"
      }
    })
  }
  deleteRole(roleId: any) {
    this.roleService.deleteRole(roleId).subscribe(resp => {
      if (resp.status = 200) {
        this.toastrService.success("", resp.msg, { timeOut: 3000 })
        this.getAllRoles()
      }
      else {
        this.toastrService.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }
  editRole(roleId: any) {
    this.route.navigateByUrl("/admin/editroles/"  +roleId)
  }

}
