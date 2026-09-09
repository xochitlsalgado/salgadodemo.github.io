import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrls: ['./languages.css']
})
export class LanguagesComponent implements OnInit {
  languages: any[] = [];

  constructor(private langService: LanguagesService) {}

  ngOnInit(): void {
    if (this.langService.getLanguages) {
      this.langService.getLanguages().subscribe(data => {
        this.languages = data;
      });
    }
  }
}
