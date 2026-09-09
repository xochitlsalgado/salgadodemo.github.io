import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- AGREGAR
import { CertificatesService } from '../services/certificates.service';
import { Certificate } from '../models/certificate.model';

@Component({
  selector: 'app-certificates',
  standalone: true, // <-- AGREGAR ESTA LÍNEA
  imports: [CommonModule], // <-- AGREGAR ESTA LÍNEA
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = [];

  constructor(private certService: CertificatesService) {}

  ngOnInit(): void {
    this.certService.getCertificates().subscribe((data: any) => {
      this.certificates = data;
    });
  }
}
