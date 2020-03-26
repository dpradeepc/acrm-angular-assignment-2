import { Component, OnInit } from '@angular/core';
import { RealtimeService } from './services/realtime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  channel = 'c_channel';

  constructor(private realtimeService: RealtimeService) { }

    ngOnInit() {
     /* setInterval(() => {
          let hw = 'Hello World, ' + Date.now();
          this.realtimeService.publish({
              channel: this.channel, message: hw
          });
      }, 5000);*/
  }
}
