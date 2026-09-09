import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerData: any;

  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {
    if (this.headerService.getHeaderData) {
      this.headerService.getHeaderData().subscribe(data => {
        this.headerData = data;
      });
    }
  }
}
