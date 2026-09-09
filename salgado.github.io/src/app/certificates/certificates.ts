import { Component } from '@angular/core';
import { CertificatesService } from '../services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.html', // Nombre exacto de tu archivo
  styleUrls: ['./certificates.scss']   // Nombre exacto de tu archivo
})
export class CertificatesComponent {
  // Inyectamos el servicio para traer los datos de Firebase
  constructor(public certificatesService: CertificatesService) { }
}
