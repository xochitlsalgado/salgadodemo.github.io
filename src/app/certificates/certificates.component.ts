import { Component, OnInit } from '@angular/core';
import { CertificatesService, Certificate } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
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
