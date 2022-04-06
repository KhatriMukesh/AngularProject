import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/role.service';

@Component({
  selector: 'app-addroles',
  templateUrl: './addroles.component.html',
  styleUrls: ['./addroles.component.css']
})
export class AddrolesComponent implements OnInit {

  constructor(private roleService:RoleService,private router:Router,private toastrService:ToastrService) { }
  roleName:string =""

  ngOnInit(): void {
  }
  addRole(){
    let role = {roleName:this.roleName} 
    this.roleService.addRole(role).subscribe(resp=>{
      //console.log(resp);
      if(resp.status == 200){
        //navigate list role 
       // this.toastrService.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("/admin/listrole")
      }else{

      }
      
    })

  }

}
