import { Component, OnInit, ViewChild } from '@angular/core';
import { RealtimeService } from './../../services/realtime.service';
import { AddSubmarineComponent } from './../add-submarine/add-submarine.component';
import { ModalService } from './../../shared/components/modal/modal.service'

@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.css']
})
export class ControlRoomComponent implements OnInit {

  public submarines;
  public modalId = 'custom-modal';

  @ViewChild('modal', { static: false }) modal: AddSubmarineComponent

  constructor(private realtimeService: RealtimeService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.realtimeService.submarines.subscribe((submarines) => {
      this.submarines = submarines;
    });
  }

  openModal() {
    this.modalService.open(this.modalId);
  }

  closeModal() {
    this.modalService.close(this.modalId);
  }

}
