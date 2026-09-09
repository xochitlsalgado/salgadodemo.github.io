import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesService, Certificate } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html', // Coincide con tu archivo src/app/certificates/certificates.html
  styleUrls: ['./certificates.css']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private certService: CertificatesService) {}

  ngOnInit(): void {
    this.certService.getCertificates().subscribe(data => {
      this.certificates = data;
    });
  }
}
