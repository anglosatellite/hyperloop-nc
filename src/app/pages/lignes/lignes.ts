import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface LignesList {
  lineName: string;
  lineIcon: string;
  lineRoute: string[];
  lineType: string;
}

@Component({
  selector: 'app-lignes',
  imports: [CommonModule],
  templateUrl: './lignes.html',
  styleUrl: './lignes.scss',
})
export class Lignes {
  lines: LignesList[] = [];
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.http.get<LignesList[]>('http://localhost:3000/lignes').subscribe((data) => {
      this.lines = data;
      this.cd.detectChanges();
    });
  }
}
