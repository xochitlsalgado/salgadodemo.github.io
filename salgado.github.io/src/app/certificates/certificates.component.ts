import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Incluye JsonPipe, NgIf, NgFor
import { CertificatesService, Certificate } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html', // O ./certificates.html según el nombre exacto de tu archivo
  styleUrls: []
})
export class CertificatesComponent implements OnInit {
  certificates: any[] = [];

  constructor(private certService: CertificatesService) {}

  ngOnInit(): void {
    this.certService.getCertificates().subscribe((data: any[]) => {
      this.certificates = data;
      console.log('Datos recibidos de Firebase:', data);
    });
  }
}
