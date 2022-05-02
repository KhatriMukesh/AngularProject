import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/role.service';

@Component({
  selector: 'app-editroles',
  templateUrl: './editroles.component.html',
  styleUrls: ['./editroles.component.css']
})
export class EditrolesComponent implements OnInit {
  roleId:string = ""
  roleName:string = ""
  constructor(private activatedRoute:ActivatedRoute,private roleService:RoleService,private tsService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.roleId = this.activatedRoute.snapshot.params['roleId']    
    this.getRoleByRoleId() 
    // console.log(this.getRoleByRoleId);
    
  }
  getRoleByRoleId(){
    this.roleService.getRoleById(this.roleId).subscribe(resp=>{
      this.roleName = resp.data.roleName 
      console.log(resp);
      })
  }

  updateRole(){
    let role = {
      roleId : this.roleId,
      roleName : this.roleName
    }
    this.roleService.updateRole(role).subscribe(resp=>{
      if(resp.status == 200){
          this.tsService.success("",resp.msg,{timeOut:3000})
          this.router.navigateByUrl("/admin/listroles")
        }else{
        this.tsService.error("",resp.msg,{timeOut:3000})
      }
    })
  }

}
