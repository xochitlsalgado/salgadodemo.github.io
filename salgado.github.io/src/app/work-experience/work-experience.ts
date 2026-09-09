import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceService } from '../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.html',
  styleUrls: ['./work-experience.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperiences: any[] = [];

  constructor(private workService: WorkExperienceService) {}

  ngOnInit(): void {
    if (this.workService.getWorkExperiences) {
      this.workService.getWorkExperiences().subscribe(data => {
        this.workExperiences = data;
      });
    }
  }
}
