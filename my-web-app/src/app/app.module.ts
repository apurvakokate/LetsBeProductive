import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ResearchComponent } from './research/research.component';
import { CodingComponent } from './coding/coding.component';
import { NewIdeasComponent } from './new-ideas/new-ideas.component';
import { PoetryComponent } from './poetry/poetry.component';
import { LifeExperiencesComponent } from './life-experiences/life-experiences.component';
import { InfluencialPeopleComponent } from './influencial-people/influencial-people.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ResearchComponent,
    CodingComponent,
    NewIdeasComponent,
    PoetryComponent,
    LifeExperiencesComponent,
    InfluencialPeopleComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
