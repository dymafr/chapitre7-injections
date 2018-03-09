import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public panier: { name: string, type: string }[] = [];
  public aliment: { name: string, type: string } = {
    name: 'Nom',
    type: 'Type d\'aliment'
  }


}
