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
    AdminFooterComponent
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
