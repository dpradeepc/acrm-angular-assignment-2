import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalModule } from '@app/shared/components/modal/modal.module'
import { PubNubAngular } from 'pubnub-angular2';
import { AppComponent } from '@app/app.component';
import { ControlRoomComponent } from '@app/components/control-room/control-room.component';
import { SubmarinesComponent } from '@app/components/submarines/submarines.component';
import { AddSubmarineComponent } from '@app/components/add-submarine/add-submarine.component';
import { ToolbarComponent } from '@app/shared/components/layout/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlRoomComponent,
    SubmarinesComponent,
    AddSubmarineComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  providers: [PubNubAngular],
  bootstrap: [AppComponent]
})
export class AppModule { }
