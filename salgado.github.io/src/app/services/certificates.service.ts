import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  constructor(private firestore: AngularFirestore) {}

  getCertificates(): Observable<Certificate[]> {
    return this.firestore.collection<Certificate>('certificates').valueChanges();
  }
}

