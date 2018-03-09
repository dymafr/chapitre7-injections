import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styles: []
})
export class FruitsComponent implements OnInit {
  public fruits: string[] = ['Banane', 'pomme', 'fraise']

  constructor() { }

  ngOnInit() {
  }

}
