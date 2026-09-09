import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    if (this.skillsService.getSkills) {
      this.skillsService.getSkills().subscribe(data => {
        this.skills = data;
      });
    }
  }
}
