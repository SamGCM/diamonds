import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CandidateComponent } from "./candidate/candidate.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { CheckRegisterComponent } from "./check-register/check-register.component";
import { RegistersComponent } from "./registers/registers.component";
import { guardRouteGuard } from "./guard-route.guard";

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'candidato',
    component: CandidateComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [guardRouteGuard]
  },
  {
    path: 'registro',
    component: CheckRegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscricoes',
    component: RegistersComponent,
    canActivate: [guardRouteGuard]
  },
]
