import { Injectable } from '@angular/core';
import { PubNubAngular } from 'pubnub-angular2';
import { BehaviorSubject } from 'rxjs';
import { AppConstants } from './constants'

@Injectable({
  providedIn: 'root'
})
export class RealtimeService {

  private submarinesChannel = AppConstants.SUBMARINE_CHANNEL;
  private controlRoomChannel = AppConstants.CROOM_CHANNEL;
  private submarinesSource = new BehaviorSubject<Array<object>>([{}]);
  public submarines = this.submarinesSource.asObservable();

  constructor(private pubnub: PubNubAngular) {
    pubnub.init({
      publishKey: AppConstants.PUBLISH_KEY,
      subscribeKey: AppConstants.SUBSCRIBE_KEY
    });

    pubnub.subscribe({
      channels: [this.submarinesChannel, this.controlRoomChannel],
      triggerEvents: ['message']
    });

    this.getMessage(this.submarinesChannel);
    this.getMessage(this.controlRoomChannel);

  }

  getMessage(channel) {
    this.pubnub.getMessage(channel, (msg) => {
      if (channel === AppConstants.SUBMARINE_CHANNEL) {
        this.submarinesSource.next(msg.message.data);
      }
    });
  }

  publish(message) {
    console.log(message);
    this.pubnub.publish(message);
  }

}
