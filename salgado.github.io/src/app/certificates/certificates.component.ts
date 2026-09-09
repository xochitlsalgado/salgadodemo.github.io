import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesService, Certificate } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html', // <-- ASEGÚRATE DE QUE EL NOMBRE SEA EXACTO (ej. ./certificates.component.html o ./certificates.html)
  styleUrls: []
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private certService: CertificatesService) {}

  ngOnInit(): void {
    this.certService.getCertificates().subscribe((data: Certificate[]) => {
      this.certificates = data;
    });
  }
}
