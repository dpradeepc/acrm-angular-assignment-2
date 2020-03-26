import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealtimeService {

  private submarinesChannel = 's_channel';
  private controlRoomChannel = 'c_channel';
  private submarinesSource = new BehaviorSubject<Array<object>>([{}]);
  public submarines = this.submarinesSource.asObservable();

  constructor(private pubnub: PubNubAngular) {
    pubnub.init({
        publishKey: 'pub-c-952aaa3f-1a27-47f8-a13b-3060d3aafca6',
        subscribeKey: 'sub-c-589b155e-6e61-11ea-8eaf-9ea4064cf66f'
        });

    pubnub.subscribe({
          channels: [this.submarinesChannel, this.controlRoomChannel],
          triggerEvents: ['message']
      });

    this.getMessage(this.submarinesChannel);
    this.getMessage(this.controlRoomChannel);

    }

    getMessage(channel){ 
      this.pubnub.getMessage(channel, (msg) => {
        if(channel === "s_channel"){
          this.submarinesSource.next(msg.message.data);
        }
      });
    }

    publish(message){
      console.log(message);
      this.pubnub.publish(message);
    }    
  
}
