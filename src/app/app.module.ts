import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import { TemplateFmComponent } from './template-fm/template-fm.component';
import { ReactiveFmComponent } from './reactive-fm/reactive-fm.component';

import { ValidationService } from './shared/validation.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFmComponent,
    ReactiveFmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    DropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
