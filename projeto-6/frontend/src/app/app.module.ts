import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CheckRegisterComponent } from './check-register/check-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RegistersComponent } from './registers/registers.component';
import { FormCandidateComponent } from './form-candidate/form-candidate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectValidatorDirective } from './shared/SelectValidator.directive';
import { CandidateService } from './services/candidate.service';
import { DashboardService } from './services/dashboard.service';
import { RegisterService } from './services/register.service';
import { SchoolingService } from './services/schooling.service';
import { SkillsService } from './services/skills.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { DocumentValidatorDirective } from './shared/DocumentValidator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CheckRegisterComponent,
    DashboardComponent,
    CandidateComponent,
    TopbarComponent,
    RegistersComponent,
    FormCandidateComponent,
    SelectValidatorDirective,
    DocumentValidatorDirective,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CandidateService,
    DashboardService,
    RegisterService,
    SchoolingService,
    SkillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
