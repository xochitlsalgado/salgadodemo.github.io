import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestsService } from '../services/interests.service';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.html',
  styleUrls: ['./interests.css']
})
export class InterestsComponent implements OnInit {
  interests: any[] = [];

  constructor(private interestsService: InterestsService) {}

  ngOnInit(): void {
    if (this.interestsService.getInterests) {
      this.interestsService.getInterests().subscribe(data => {
        this.interests = data;
      });
    }
  }
}
