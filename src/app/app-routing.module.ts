import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModulesComponent } from './admin/add-modules/add-modules.component';
import { AddProjectTeamComponent } from './admin/add-project-team/add-project-team.component';
import { AddTasksComponent } from './admin/add-tasks/add-tasks.component';
import { AddprojectsComponent } from './admin/addprojects/addprojects.component';
import { AddrolesComponent } from './admin/addroles/addroles.component';
import { AddusersComponent } from './admin/addusers/addusers.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin/admin/admin.component';
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
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ProjectManagerDashboardComponent } from './projectManager/project-manager-dashboard/project-manager-dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { TesterDashboardComponent } from './tester/tester-dashboard/tester-dashboard.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},

  {
    path: "admin", component: AdminComponent, children: [

    //roles
    {path:"addroles",component:AddrolesComponent},
    {path:"listroles", component:ListroleComponent},
    {path:"editroles",component:EditrolesComponent},
    {path:"editroles/:roleId",component:EditrolesComponent},


    //Projects
    {path:"addprojects",component:AddprojectsComponent},
    {path:"listprojects",component:ListprojectsComponent},
    {path:"editprojects",component:EditprojectsComponent},
    {path:"editprojects/:projectId",component:EditprojectsComponent},
    {path:"pending-projects",component:PendingProjectsComponent},
    {path:"completed-projects",component:CompletedProjectsComponent},

    //Project Teams
    {path:"add-project-team",component:AddProjectTeamComponent},
    {path:"list-project-team",component:ListProjectTeamComponent},

    //users 
    {path:"addusers",component:AddusersComponent},
    {path:"listusers",component:ListusersComponent},
    {path:"editusers",component:EditusersComponent},
    {path:"editusers/:userId",component:EditusersComponent},

    //Modules
    {path:"add-modules",component:AddModulesComponent},
    {path:"list-modules",component:ListModulesComponent},
    {path:"edit-modules",component:EditModulesComponent},
    {path:"edit-modules/:moduleId",component:EditModulesComponent},


    //tasks
    {path:"add-tasks",component:AddTasksComponent},
    {path:"list-tasks",component:ListTasksComponent},
    {path:"edit-tasks",component:EditTasksComponent},
    {path:"edit-tasks/:taskId",component:EditTasksComponent},

    //Aproval user in admin 
    {path:"pending-approval",component:PendingApprovalComponent},

    ]

  },

  //Admin
  {path:"admin/admin",component:AdminComponent},
  {path:"admin/admin-dashboard",component:AdminDashboardComponent},



  //Projects Manager
  {path:"projectManager/projectManager-dashboard",component:ProjectManagerDashboardComponent},

  //Developer
  {path:"developer/developer-dashboard",component:DeveloperDashboardComponent},

  //Tester
  {path:"tester/tester-dashboard",component:TesterDashboardComponent},


  {path:"forgot-password",component:ForgotPasswordComponent},
  {path:"admin/admin-sidebar",component:AdminSidebarComponent},
  {path:"admin/admin-header",component:AdminHeaderComponent},
  {path:"admin/admin-footer",component:AdminFooterComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
