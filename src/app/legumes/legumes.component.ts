import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.component.html',
  styles: []
})
export class LegumesComponent implements OnInit {
  public legumes: string[] = ['Concombre', 'Radis', 'Carotte']

  constructor() { }

  ngOnInit() {
  }

}
