import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ExplorarComponent } from "./explorar/explorar.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'explorar', component: ExplorarComponent},
]
