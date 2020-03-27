import { Component, OnInit, ViewChild } from '@angular/core';
import { AddSubmarineComponent } from '@app/components/add-submarine/add-submarine.component';
import { RealtimeService } from '@app/services/realtime.service';
import { SubmarineService } from '@app/services/submarine.service';
import { ModalService } from '@app/shared/components/modal/modal.service'
import { AppConstants } from '@app/services/constants'

@Component({
  selector: 'app-submarines',
  templateUrl: './submarines.component.html',
  styleUrls: ['./submarines.component.scss']
})
export class SubmarinesComponent implements OnInit {

  public submarines;
  public modalId = 'custom-modal';

  @ViewChild('modal', { static: false }) modal: AddSubmarineComponent

  constructor(private realtimeService: RealtimeService, 
              private submarineSrvice: SubmarineService,
              private modalService: ModalService) { }

  ngOnInit(): void {
    this.realtimeService.submarines.subscribe((submarines) => {
      this.submarines = submarines;
    });
  }

  toggleVisibility(event, index) {
    this.submarines[index].isVisible = !this.submarines[index].isVisible;
    this.realtimeService.publish({
      channel: AppConstants.SUBMARINE_CHANNEL, message: { type: 'init', data: this.submarines }
    });
  }

  openModal() {
    this.modalService.open(this.modalId);
  }

  closeModal() {
    this.modalService.close(this.modalId);
  }

}
