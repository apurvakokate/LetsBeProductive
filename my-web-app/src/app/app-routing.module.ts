import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {CodingComponent} from "./coding/coding.component";
import {ResearchComponent} from "./research/research.component";
import {PoetryComponent} from "./poetry/poetry.component";
import {NewIdeasComponent} from "./new-ideas/new-ideas.component";
import {LifeExperiencesComponent} from "./life-experiences/life-experiences.component";
import {ContactComponent} from "./contact/contact.component";


const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'coding', component: CodingComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'poetry', component: PoetryComponent},
  {path: 'ideas', component: NewIdeasComponent},
  {path: 'life', component: LifeExperiencesComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
