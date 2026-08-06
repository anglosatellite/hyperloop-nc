import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface LignesList {
  lineName: string;
  lineIcon: string;
}

@Component({
  selector: 'app-accueil',
  imports: [RouterLink, CommonModule],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  lines: LignesList[] = [];
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.http.get<LignesList[]>('http://localhost:3000/lignes').subscribe((data) => {
      this.lines = data;
      this.cd.detectChanges();
    });
  }
}
