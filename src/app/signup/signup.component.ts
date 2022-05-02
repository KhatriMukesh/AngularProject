import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private sessionService:SessionService,private ts:ToastrService,private router:Router,private roleService:RoleService) { }
  firstName:string=""
  email:string=""
  role:string=""
  gender:string=""
  contactNumber:string=""
  password:string=""
  roles:Array<any>=[]
  

  ngOnInit(): void {
    this.roleService.getRoles().subscribe(resp => {
      this.roles = resp.data
    })
  }
  adduser(){
    let user = {firstName:this.firstName,email:this.email,password:this.password,role:this.role,gender:this.gender,contactNumber:this.contactNumber}
    // console.log(this.role);
    
    this.sessionService.addUser(user).subscribe(resp=>{
      if(resp.status==-1){
      this.ts.error("",resp.msg,{timeOut:3000});
      }
      else{
        this.ts.success("",resp.msg,{timeOut:3000});
        this.router.navigateByUrl("/login")
      }
    })
  }
}
