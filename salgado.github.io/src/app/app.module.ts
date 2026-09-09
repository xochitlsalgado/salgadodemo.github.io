import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app'; // Asegúrate que el archivo se llame app.ts
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience'; // Quitamos el .component si no existe
import { EducationComponent } from './education/education';
import { LanguagesComponent } from './languages/languages';
import { SkillsComponent } from './skills/skills';
import { CertificatesComponent } from './certificates/certificates';
import { CertificatesService } from './services/certificates.service';
import { InterestsComponent } from './interests/interests';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    SkillsComponent,
    CertificatesComponent,
    InterestsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppModule { }
