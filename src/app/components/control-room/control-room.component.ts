import { Component, OnInit } from '@angular/core';
import { RealtimeService } from './../../services/realtime.service';

@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.css']
})
export class ControlRoomComponent implements OnInit {

  public submarines;

  constructor(private realtimeService: RealtimeService) { }

  ngOnInit(): void {
    this.realtimeService.submarines.subscribe((submarines)=>{
      this.submarines = submarines;
    });
  }

}
