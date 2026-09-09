import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrls: []
})
export class CertificatesComponent implements OnInit {
  // Lista fija con los datos exactos para garantizar el renderizado
  certificates = [
    {
      title: 'Pandas',
      institution: 'Kaggle',
      url: 'https://www.kaggle.com/learn/certification/xochitlsalgado/pandas'
    },
    {
      title: 'Python',
      institution: 'Kaggle',
      url: 'https://www.kaggle.com'
    }
  ];

  ngOnInit(): void {}
}
