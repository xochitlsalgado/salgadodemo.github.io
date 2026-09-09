import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent implements OnInit {
  educationList: any[] = [];

  constructor(private eduService: EducationService) {}

  ngOnInit(): void {
    if (this.eduService.getEducation) {
      this.eduService.getEducation().subscribe(data => {
        this.educationList = data;
      });
    }
  }
}
