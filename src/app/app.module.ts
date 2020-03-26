import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PubNubAngular } from 'pubnub-angular2';
import { AppComponent } from './app.component';
import { ControlRoomComponent } from './components/control-room/control-room.component';
import { SubmarinesComponent } from './components/submarines/submarines.component';
import { AddSubmarineComponent } from './components/add-submarine/add-submarine.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlRoomComponent,
    SubmarinesComponent,
    AddSubmarineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule { }
