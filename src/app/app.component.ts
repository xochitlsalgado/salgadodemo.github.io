import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';
import { CertificatesComponent } from './certificates/certificates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [   
    HeaderComponent,
    WorkExperienceComponent,
    SkillsComponent,
    EducationComponent,
   LanguagesComponent, 
  InterestsComponent,
 CertificatesComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
