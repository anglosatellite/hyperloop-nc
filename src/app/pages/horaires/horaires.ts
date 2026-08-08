import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface LignesList {
  lineName: string;
  lineIcon: string;
  lineRoute: string[];
}
interface Departure {
  departure?: string;
  times: string[];
}

interface HoraireList {
  lineName: string;
  departures: Departure[];
}

@Component({
  selector: 'app-horaires',
  imports: [CommonModule, FormsModule],
  templateUrl: './horaires.html',
  styleUrl: './horaires.scss',
})
export class Horaires {
  selectedLine: string = 'N1';
  lines: LignesList[] = [];
  hours: HoraireList[] = [];
  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.http.get<LignesList[]>('http://localhost:3000/lignes').subscribe((data) => {
      this.lines = data;
      this.setDefaultLine();
      this.cd.detectChanges();
    });

    this.http.get<HoraireList[]>('http://localhost:3000/horaires').subscribe((data) => {
      this.hours = data;
      this.setDefaultLine();
      this.cd.detectChanges();
    });
  }

  setDefaultLine(): void {
    if (this.lines.length > 0 && this.hours.length > 0 && !this.selectedLine) {
      this.selectedLine = this.lines[0].lineName;
    }
  }

  getStations(): string[] {
    const line = this.lines.find((line) => line.lineName === this.selectedLine);
    return line?.lineRoute ?? [];
  }

  get selectedSchedule(): HoraireList | undefined {
    return this.hours.find((hour) => hour.lineName === this.selectedLine);
  }

  get selectedLineInfo(): LignesList | undefined {
    return this.lines.find((line) => line.lineName === this.selectedLine);
  }
}
