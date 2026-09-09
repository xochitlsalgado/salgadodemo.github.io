import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience';
import { EducationComponent } from './education/education';
import { LanguagesComponent } from './languages/languages';
import { SkillsComponent } from './skills/skills';
import { InterestsComponent } from './interests/interests';
import { CertificatesComponent } from './certificates/certificates';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    WorkExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    SkillsComponent,
    InterestsComponent,
    CertificatesComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
