import { Component, OnInit, ViewChild } from '@angular/core';
import { RealtimeService } from '@app/services/realtime.service';
import { AddSubmarineComponent } from '@app/components/add-submarine/add-submarine.component';
import { ModalService } from '@app/shared/components/modal/modal.service'

@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.css']
})
export class ControlRoomComponent implements OnInit {

  public submarines;

  constructor(private realtimeService: RealtimeService) { }

  ngOnInit(): void {
    this.realtimeService.submarines.subscribe((submarines) => {
      this.submarines = submarines;
    });
  }

}
