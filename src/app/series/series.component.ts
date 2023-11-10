import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SeriesService) {}

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  average(): number {
    let total = 0;
    let number = 0;
    let avg = 0;
    for (const serie of this.series) {
      total = total + serie.temporadas;
      number += 1;
    }
    avg = total/number
    return avg;
  }

}
