import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent implements OnInit {
  public aliment: { name: string, type: string } = {
    name: '',
    type: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
