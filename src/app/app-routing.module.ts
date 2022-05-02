import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModulesComponent } from './admin/add-modules/add-modules.component';
import { AddProjectTeamComponent } from './admin/add-project-team/add-project-team.component';
import { AddTasksComponent } from './admin/add-tasks/add-tasks.component';
import { AddTeamMemberComponent } from './admin/add-team-member/add-team-member.component';
import { AddprojectsComponent } from './admin/addprojects/addprojects.component';
import { AddrolesComponent } from './admin/addroles/addroles.component';
import { AddusersComponent } from './admin/addusers/addusers.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AssignModuleComponent } from './admin/assign-module/assign-module.component';
import { AssignTaskComponent } from './admin/assign-task/assign-task.component';
import { CompletedProjectsComponent } from './admin/completed-projects/completed-projects.component';
import { EditModulesComponent } from './admin/edit-modules/edit-modules.component';
import { EditTasksComponent } from './admin/edit-tasks/edit-tasks.component';
import { EditprojectsComponent } from './admin/editprojects/editprojects.component';
import { EditrolesComponent } from './admin/editroles/editroles.component';
import { EditusersComponent } from './admin/editusers/editusers.component';
import { ForgotpasswordComponent } from './admin/forgotpassword/forgotpassword.component';
import { ListModulesComponent } from './admin/list-modules/list-modules.component';
import { ListProjectTeamComponent } from './admin/list-project-team/list-project-team.component';
import { ListTasksComponent } from './admin/list-tasks/list-tasks.component';
import { ListprojectsComponent } from './admin/listprojects/listprojects.component';
import { ListroleComponent } from './admin/listrole/listrole.component';
import { ListusersComponent } from './admin/listusers/listusers.component';
import { PendingApprovalComponent } from './admin/pending-approval/pending-approval.component';
import { PendingProjectsComponent } from './admin/pending-projects/pending-projects.component';
import { BugReportComponent } from './admin/Reports/bug-report/bug-report.component';
import { DeveloperReportComponent } from './admin/Reports/developer-report/developer-report.component';
import { ProjectReportComponent } from './admin/Reports/project-report/project-report.component';
import { TaskReportComponent } from './admin/Reports/task-report/task-report.component';
import { UserReportComponent } from './admin/Reports/user-report/user-report.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DeveloperDashboardComponent } from './developer/developer-dashboard/developer-dashboard.component';
import { DeveloperListProjectsComponent } from './developer/developer-list-projects/developer-list-projects.component';
import { DeveloperViewTaskComponent } from './developer/developer-view-task/developer-view-task.component';
import { DeveloperComponent } from './developer/developer/developer.component';
import { ListAllTaskComponent } from './developer/list-all-task/list-all-task.component';
import { ListBugTaskComponent } from './developer/list-bug-task/list-bug-task.component';
import { ListPendingTaskComponent } from './developer/list-pending-task/list-pending-task.component';
import { SubmitTaskComponent } from './developer/submit-task/submit-task.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddModuleComponent } from './projectManager/add-module/add-module.component';
import { AddTaskComponent } from './projectManager/add-tasks/add-tasks.component';
import { AddTeamMembersComponent } from './projectManager/add-team-members/add-team-members.component';
import { AddUsersComponent } from './projectManager/add-users/add-users.component';
import { AssignTasksComponent } from './projectManager/assign-tasks/assign-tasks.component';
import { CompletedProjectComponent } from './projectManager/completed-project/completed-project.component';
import { EditModuleComponent } from './projectManager/edit-module/edit-module.component';
import { EditProjectsComponent } from './projectManager/edit-projects/edit-projects.component';
import { ListModuleComponent } from './projectManager/list-module/list-module.component';
import { ListProjectsComponent } from './projectManager/list-projects/list-projects.component';
import { ListTaskComponent } from './projectManager/list-task/list-task.component';
import { ListUsersComponent } from './projectManager/list-users/list-users.component';
import { ModulesReportComponent } from './projectManager/modules-report/modules-report.component';
import { PendingProjectComponent } from './projectManager/pending-project/pending-project.component';
import { ProjectManagerDashboardComponent } from './projectManager/project-manager-dashboard/project-manager-dashboard.component';
import { ProjectManagerComponent } from './projectManager/project-manager/project-manager.component';
import { TasksReportComponent } from './projectManager/tasks-report/tasks-report.component';
import { ViewTeamComponent } from './projectManager/view-team/view-team.component';
import { SignupComponent } from './signup/signup.component';
import { AddBugComponent } from './tester/add-bug/add-bug.component';
import { BugAssignComponent } from './tester/bug-assign/bug-assign.component';
import { EditBugComponent } from './tester/edit-bug/edit-bug.component';
import { ListBugComponent } from './tester/list-bug/list-bug.component';
import { TestTaskComponent } from './tester/test-task/test-task.component';
import { TesterDashboardComponent } from './tester/tester-dashboard/tester-dashboard.component';
import { TesterListAllBugsComponent } from './tester/tester-list-all-bugs/tester-list-all-bugs.component';
import { TesterListAllTaskComponent } from './tester/tester-list-all-task/tester-list-all-task.component';
import { TesterListPendingTaskComponent } from './tester/tester-list-pending-task/tester-list-pending-task.component';
import { TesterComponent } from './tester/tester/tester.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"forgot-password",component:ForgotPasswordComponent},
  { path: "changepassword", component: ChangepasswordComponent },
  { path: "logout", component:LogoutComponent },


  // {path:"admin/admin-sidebar",component:AdminSidebarComponent},
  // {path:"admin/admin-header",component:AdminHeaderComponent},
  // {path:"admin/admin-footer",component:AdminFooterComponent},


  {
    path: "admin", component: AdminComponent, children: [

    {path:"admin-dashboard",component:AdminDashboardComponent},
    // //roles
    {path:"addroles",component:AddrolesComponent},
    {path:"listroles", component:ListroleComponent},
    // {path:"editroles",component:EditrolesComponent},
    {path:"editroles/:roleId",component:EditrolesComponent},


    // //Projects
    {path:"addprojects",component:AddprojectsComponent},
    {path:"listprojects",component:ListprojectsComponent},
    // {path:"editprojects",component:EditprojectsComponent},
    {path:"editprojects/:projectId",component:EditprojectsComponent},
    {path:"pending-projects",component:PendingProjectsComponent},
    {path:"completed-projects",component:CompletedProjectsComponent},

    // //Project Teams
    {path:"add-project-team",component:AddProjectTeamComponent},
    {path:"list-project-team",component:ListProjectTeamComponent},
    // {path:"addTeamMember",component:AddTeamMemberComponent},
    // {path:"addTeamMember/:projectId",component:AddTeamMemberComponent},
    

    // //users 
    {path:"addusers",component:AddusersComponent},
    {path:"listusers",component:ListusersComponent},
    // {path:"editusers",component:EditusersComponent},
    // {path:"editusers/:userId",component:EditusersComponent},

    // //Modules
    {path:"add-modules",component:AddModulesComponent},
    {path:"list-modules",component:ListModulesComponent},
    // {path:"edit-modules",component:EditModulesComponent},
    {path:"edit-modules/:moduleId",component:EditModulesComponent},


    // //tasks
    {path:"add-tasks",component:AddTasksComponent},
    {path:"list-tasks",component:ListTasksComponent},
    // {path:"edit-tasks",component:EditTasksComponent},
    {path:"edit-tasks/:taskId",component:EditTasksComponent},

    // //Aproval user in admin 
    {path:"pending-approval",component:PendingApprovalComponent},
    {path:"change-password",component:ChangePasswordComponent},
    {path:"forgotpassword",component:ForgotpasswordComponent},
    { path: "addTeamMember/:projectId", component: AddTeamMemberComponent },
    { path: "assignTask/:user", component: AssignTaskComponent},
    { path: "assignModule/:user", component: AssignModuleComponent },
    //reports
    { path: "Reports/user-report", component: UserReportComponent },
    { path: "Reports/project-report", component: ProjectReportComponent },
    {path:"Reports/task-report", component:TaskReportComponent},
    { path: "Reports/developer-report", component: DeveloperReportComponent },
    { path: "Reports/bug-report", component: BugReportComponent }

    ]

  },

  //Admin
  {path:"admin/admin",component:AdminComponent},
 

  //passwords
  {path:"forgot-password",component:ForgotPasswordComponent},
  {path:"changepassword",component:ChangepasswordComponent},
  


  //Projects Manager
  // {path:"projectManager/projectManager-dashboard",component:ProjectManagerDashboardComponent},

  {
    path: "project-manager", component: ProjectManagerComponent, children: [
      { path: "project-manager-dashboard", component: ProjectManagerDashboardComponent },
      { path: "add-users", component: AddUsersComponent },
      { path: "list-users", component: ListUsersComponent },
      { path: "list-projects", component: ListProjectsComponent },
      { path: "edit-projects/:projectId", component: EditProjectsComponent },
      { path: "pending-projects", component: PendingProjectComponent },
      { path: "completed-projects", component: CompletedProjectComponent },
      { path: "add-modules", component: AddModuleComponent },
      { path: "list-modules", component: ListModuleComponent },
      { path: "edit-module/:moduleId", component: EditModuleComponent },
      { path: "viewTeam/:projectId", component: ViewTeamComponent },
      { path: "addTeamMember/:projectId", component: AddTeamMembersComponent },
      { path: "assign-Tasks/:user", component: AssignTasksComponent },
      { path: "add-tasks", component: AddTaskComponent },
      { path: "list-tasks", component: ListTaskComponent },
      // {path:"edit-task/:taskId", component:edittas0}
      { path: "modules-report", component: ModulesReportComponent },
      { path: "tasks-report", component: TasksReportComponent },
      { path: "change-Password", component: ChangePasswordComponent }
    ]
  },


  {
    path: "developer", component: DeveloperComponent, children: [
      { path: "developer-dashboard", component: DeveloperDashboardComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "list-projects", component: DeveloperListProjectsComponent },
      { path: "viewTask/:projectId", component: DeveloperViewTaskComponent },
      { path: "submit-task/:taskId", component: SubmitTaskComponent },
      { path: "list-all-task", component: ListAllTaskComponent },
      { path: "list-pending-task", component: ListPendingTaskComponent },
      { path: "list-bug-task", component: ListBugTaskComponent }
    ]
  },

  //Developer
  // {path:"developer/developer-dashboard",component:DeveloperDashboardComponent},

  //Tester
  {
    path: "tester", component: TesterComponent, children: [
      { path: "tester-dashboard", component: TesterDashboardComponent },
      { path: "change-password", component: ChangePasswordComponent },
      { path: "add-bug", component: AddBugComponent },
      { path: "list-bug", component: ListBugComponent },
      { path: "edit-bug/:bugId", component: EditBugComponent },
      { path: "list-all-task", component: TesterListAllTaskComponent },
      { path: "test-task/:taskId", component: TestTaskComponent },
      { path: "bug-Assign/:taskId", component: BugAssignComponent },
      { path: "list-pending-task", component: TesterListPendingTaskComponent },
      { path: "list-all-bugs", component: TesterListAllBugsComponent }
    ]
  }


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
