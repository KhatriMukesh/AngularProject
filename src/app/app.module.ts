import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddrolesComponent } from './admin/addroles/addroles.component';
import { AddusersComponent } from './admin/addusers/addusers.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ListroleComponent } from './admin/listrole/listrole.component';
import { EditrolesComponent } from './admin/editroles/editroles.component';
import { ListusersComponent } from './admin/listusers/listusers.component';
import { EditusersComponent } from './admin/editusers/editusers.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DeveloperDashboardComponent } from './developer/developer-dashboard/developer-dashboard.component';
import { ProjectManagerDashboardComponent } from './projectManager/project-manager-dashboard/project-manager-dashboard.component';
import { TesterDashboardComponent } from './tester/tester-dashboard/tester-dashboard.component';
import { PendingApprovalComponent } from './admin/pending-approval/pending-approval.component';
import { AddprojectsComponent } from './admin/addprojects/addprojects.component';
import { ListprojectsComponent } from './admin/listprojects/listprojects.component';
import { EditprojectsComponent } from './admin/editprojects/editprojects.component';
import { PendingProjectsComponent } from './admin/pending-projects/pending-projects.component';
import { CompletedProjectsComponent } from './admin/completed-projects/completed-projects.component';
import { AddProjectTeamComponent } from './admin/add-project-team/add-project-team.component';
import { ListProjectTeamComponent } from './admin/list-project-team/list-project-team.component';
import { AddModulesComponent } from './admin/add-modules/add-modules.component';
import { ListModulesComponent } from './admin/list-modules/list-modules.component';
import { EditModulesComponent } from './admin/edit-modules/edit-modules.component';
import { AddTasksComponent } from './admin/add-tasks/add-tasks.component';
import { ListTasksComponent } from './admin/list-tasks/list-tasks.component';
import { EditTasksComponent } from './admin/edit-tasks/edit-tasks.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AddTeamMemberComponent } from './admin/add-team-member/add-team-member.component';
import { AssignModuleComponent } from './admin/assign-module/assign-module.component';
import { ForgotpasswordComponent } from './admin/forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogoutComponent } from './logout/logout.component';
import { AddTeamMembersComponent } from './projectManager/add-team-members/add-team-members.component';
import { AddUsersComponent } from './projectManager/add-users/add-users.component';
import { AssignTasksComponent } from './projectManager/assign-tasks/assign-tasks.component';
import { EditProjectsComponent } from './projectManager/edit-projects/edit-projects.component';
import { ListProjectsComponent } from './projectManager/list-projects/list-projects.component';
import { ListUsersComponent } from './projectManager/list-users/list-users.component';
import { ModulesReportComponent } from './projectManager/modules-report/modules-report.component';
import { ProjectManagerHeaderComponent } from './projectManager/project-manager-header/project-manager-header.component';
import { ProjectManagerSlidebarComponent } from './projectManager/project-manager-slidebar/project-manager-slidebar.component';
import { ProjectManagerComponent } from './projectManager/project-manager/project-manager.component';
import { TasksReportComponent } from './projectManager/tasks-report/tasks-report.component';
import { ViewTeamComponent } from './projectManager/view-team/view-team.component';
import { BugReportComponent } from './admin/Reports/bug-report/bug-report.component';
import { DeveloperReportComponent } from './admin/Reports/developer-report/developer-report.component';
import { ProjectReportComponent } from './admin/Reports/project-report/project-report.component';
import { TaskReportComponent } from './admin/Reports/task-report/task-report.component';
import { UserReportComponent } from './admin/Reports/user-report/user-report.component';
import { PendingProjectComponent } from './projectManager/pending-project/pending-project.component';
import { CompletedProjectComponent } from './projectManager/completed-project/completed-project.component';
import { AddModuleComponent } from './projectManager/add-module/add-module.component';
import { ListModuleComponent } from './projectManager/list-module/list-module.component';
import { EditModuleComponent } from './projectManager/edit-module/edit-module.component';
import { DeveloperHeaderComponent } from './developer/developer-header/developer-header.component';
import { DeveloperSlidebarComponent } from './developer/developer-slidebar/developer-slidebar.component';
import { DeveloperComponent } from './developer/developer/developer.component';
import { AssignTaskComponent } from './admin/assign-task/assign-task.component';
import { AddTaskComponent } from './projectManager/add-tasks/add-tasks.component';
import { DeveloperListProjectsComponent } from './developer/developer-list-projects/developer-list-projects.component';
import { DeveloperViewTaskComponent } from './developer/developer-view-task/developer-view-task.component';
import { ListAllTaskComponent } from './developer/list-all-task/list-all-task.component';
import { ListBugTaskComponent } from './developer/list-bug-task/list-bug-task.component';
import { SubmitTaskComponent } from './developer/submit-task/submit-task.component';
import { ListPendingTaskComponent } from './developer/list-pending-task/list-pending-task.component';
import { AddBugComponent } from './tester/add-bug/add-bug.component';
import { BugAssignComponent } from './tester/bug-assign/bug-assign.component';
import { EditBugComponent } from './tester/edit-bug/edit-bug.component';
import { ListBugComponent } from './tester/list-bug/list-bug.component';
import { TestTaskComponent } from './tester/test-task/test-task.component';
import { TesterHeaderComponent } from './tester/tester-header/tester-header.component';
import { TesterListAllBugsComponent } from './tester/tester-list-all-bugs/tester-list-all-bugs.component';
import { TesterListAllTaskComponent } from './tester/tester-list-all-task/tester-list-all-task.component';
import { TesterListPendingTaskComponent } from './tester/tester-list-pending-task/tester-list-pending-task.component';
import { TesterSlidebarComponent } from './tester/tester-slidebar/tester-slidebar.component';
import { TesterComponent } from './tester/tester/tester.component';
import { ListTaskComponent } from './projectManager/list-task/list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddrolesComponent,
    AddusersComponent,
    SignupComponent,
    LoginComponent,
    ListroleComponent,
    EditrolesComponent,
    ListusersComponent,
    EditusersComponent,
    AdminDashboardComponent,
    DeveloperDashboardComponent,
    ProjectManagerDashboardComponent,
    TesterDashboardComponent,
    PendingApprovalComponent,
    AddprojectsComponent,
    ListprojectsComponent,
    EditprojectsComponent,
    PendingProjectsComponent,
    CompletedProjectsComponent,
    AddProjectTeamComponent,
    ListProjectTeamComponent,
    AddModulesComponent,
    ListModulesComponent,
    EditModulesComponent,
    AddTasksComponent,
    ListTasksComponent,
    EditTasksComponent,
    ForgotPasswordComponent,
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AddTeamMemberComponent,
    AssignModuleComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ChangePasswordComponent,
    LogoutComponent,
    AddTeamMembersComponent,
    AddUsersComponent,
    AssignTasksComponent,
    EditProjectsComponent,
    ListProjectsComponent,
    ListUsersComponent,
    ModulesReportComponent,
    ProjectManagerHeaderComponent,
    ProjectManagerSlidebarComponent,
    ProjectManagerComponent,
    TasksReportComponent,
    ViewTeamComponent,
    BugReportComponent,
    DeveloperReportComponent,
    ProjectReportComponent,
    TaskReportComponent,
    UserReportComponent,
    PendingProjectComponent,
    CompletedProjectComponent,
    AddModuleComponent,
    ListModuleComponent,
    EditModuleComponent,
    DeveloperHeaderComponent,
    DeveloperSlidebarComponent,
    DeveloperComponent,
    AssignTaskComponent,
    AddTaskComponent,
    DeveloperListProjectsComponent,
    DeveloperViewTaskComponent,
    ListAllTaskComponent,
    ListBugTaskComponent,
    SubmitTaskComponent,
    ListPendingTaskComponent,
    AddBugComponent,
    BugAssignComponent,
    EditBugComponent,
    ListBugComponent,
    TestTaskComponent,
    TesterHeaderComponent,
    TesterListAllBugsComponent,
    TesterListAllTaskComponent,
    TesterListPendingTaskComponent,
    TesterSlidebarComponent,
    TesterComponent,
    ListTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
