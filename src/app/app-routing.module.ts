import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModulesComponent } from './admin/add-modules/add-modules.component';
import { AddProjectTeamComponent } from './admin/add-project-team/add-project-team.component';
import { AddTasksComponent } from './admin/add-tasks/add-tasks.component';
import { AddprojectsComponent } from './admin/addprojects/addprojects.component';
import { AddrolesComponent } from './admin/addroles/addroles.component';
import { AddusersComponent } from './admin/addusers/addusers.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CompletedProjectsComponent } from './admin/completed-projects/completed-projects.component';
import { EditModulesComponent } from './admin/edit-modules/edit-modules.component';
import { EditTasksComponent } from './admin/edit-tasks/edit-tasks.component';
import { EditprojectsComponent } from './admin/editprojects/editprojects.component';
import { EditrolesComponent } from './admin/editroles/editroles.component';
import { EditusersComponent } from './admin/editusers/editusers.component';
import { ListModulesComponent } from './admin/list-modules/list-modules.component';
import { ListProjectTeamComponent } from './admin/list-project-team/list-project-team.component';
import { ListTasksComponent } from './admin/list-tasks/list-tasks.component';
import { ListprojectsComponent } from './admin/listprojects/listprojects.component';
import { ListroleComponent } from './admin/listrole/listrole.component';
import { ListusersComponent } from './admin/listusers/listusers.component';
import { PendingApprovalComponent } from './admin/pending-approval/pending-approval.component';
import { PendingProjectsComponent } from './admin/pending-projects/pending-projects.component';
import { DeveloperDashboardComponent } from './developer/developer-dashboard/developer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProjectManagerDashboardComponent } from './projectManager/project-manager-dashboard/project-manager-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { TesterDashboardComponent } from './tester/tester-dashboard/tester-dashboard.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},

  //roles
  {path:"admin/addroles",component:AddrolesComponent},
  {path:"admin/listrole", component:ListroleComponent},
  {path:"admin/editroles",component:EditrolesComponent},
  {path:"admin/editroles/:roleId",component:EditrolesComponent},

  //users
  {path:"admin/addusers",component:AddusersComponent},
  {path:"admin/listusers",component:ListusersComponent},
  {path:"admin/editusers",component:EditusersComponent},
  {path:"admin/editusers/:userId",component:EditusersComponent},


  //Projects
  {path:"admin/addprojects",component:AddprojectsComponent},
  {path:"admin/listprojects",component:ListprojectsComponent},
  {path:"admin/editprojects",component:EditprojectsComponent},
  {path:"admin/editprojects/:projectId",component:EditprojectsComponent},
  {path:"admin/pending-projects",component:PendingProjectsComponent},
  {path:"admin/completed-projects",component:CompletedProjectsComponent},


  //Modules
  {path:"admin/add-modules",component:AddModulesComponent},
  {path:"admin/list-modules",component:ListModulesComponent},
  {path:"admin/edit-modules",component:EditModulesComponent},
  {path:"admin/edit-modules/:moduleId",component:EditModulesComponent},


  //tasks
  {path:"admin/add-tasks",component:AddTasksComponent},
  {path:"admin/list-tasks",component:ListTasksComponent},
  {path:"admin/edit-tasks",component:EditTasksComponent},
  {path:"admin/edit-tasks/:taskId",component:EditTasksComponent},
  

  //Project Teams
  {path:"admin/add-project-team",component:AddProjectTeamComponent},
  {path:"admin/list-project-team",component:ListProjectTeamComponent},


  //Aproval user in admin 
  {path:"admin/pending-approval",component:PendingApprovalComponent},


  //Admin
  {path:"admin/admin-dashboard",component:AdminDashboardComponent},


  //Projects Manager
  {path:"projectManager/projectManager-dashboard",component:ProjectManagerDashboardComponent},

  //Developer
  {path:"developer/developer-dashboard",component:DeveloperDashboardComponent},

  //Tester
  {path:"tester/tester-dashboard",component:TesterDashboardComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
