import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateFmComponent } from './template-fm/template-fm.component';
import { ReactiveFmComponent } from './reactive-fm/reactive-fm.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFmComponent,
    ReactiveFmComponent
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
