import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {OurProjectComponent} from "./components/our-project/our-project.component";
import {AboutUsComponent} from "./components/about/about-us.component";
import {OurServiceComponent} from "./components/our-service/our-service.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'our-project', component: OurProjectComponent},
  {path: 'our-service', component: OurServiceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
