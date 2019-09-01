import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PollComponent } from './components/poll/poll.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PollDialogComponent } from './components/poll-dialog/poll-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PollComponent,
    PollDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: [
    PollDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
