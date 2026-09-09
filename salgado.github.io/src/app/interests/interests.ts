import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestsService } from '../services/interests.service';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.html',
  styleUrls: ['./interests.scss']
})
export class InterestsComponent implements OnInit {
  interests: any[] = [];

  constructor(private interestsService: InterestsService) {}

  ngOnInit(): void {
    if (this.interestsService.getInterests) {
      this.interestsService.getInterests().subscribe((data: any) => {
        this.interests = data;
      });
    }
  }

  // Si solo viene la URL, muestra 'Certificado Python', de lo contrario limpia el texto
  getText(item: any): string {
    const str = item?.name || item || '';
    if (str.startsWith('http://') || str.startsWith('https://')) {
      return 'Certificado Python';
    }
    return str.split('http')[0].trim();
  }

  // Extrae la URL exacta
  getUrl(item: any): string {
    const str = item?.name || item || '';
    const match = str.match(/(https?:\/\/[^\s]+)/);
    return match ? match[0] : '#';
  }
}
