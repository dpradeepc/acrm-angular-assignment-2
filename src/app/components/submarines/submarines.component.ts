import { Component, OnInit } from '@angular/core';
import { RealtimeService } from './../../services/realtime.service';
import { SubmarineService } from './../../services/submarine.service';

@Component({
  selector: 'app-submarines',
  templateUrl: './submarines.component.html',
  styleUrls: ['./submarines.component.css']
})
export class SubmarinesComponent implements OnInit {

  public submarines;

  constructor(private realtimeService: RealtimeService, private submarineSrvice: SubmarineService) { }

  ngOnInit(): void {
    this.realtimeService.submarines.subscribe((submarines) => {
      this.submarines = submarines;
    });
  }

  toggleVisibility(index) {
    this.submarines[index].isVisible = !this.submarines[index].isVisible;
    this.realtimeService.publish({
      channel: 's_channel', message: { type: 'init', data: this.submarines }
    });
  }

}
