import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FruitsComponent } from './fruits/fruits.component';
import { LegumesComponent } from './legumes/legumes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    FruitsComponent,
    LegumesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
