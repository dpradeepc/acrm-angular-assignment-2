import { Injectable } from '@angular/core';
import { RealtimeService } from './realtime.service';

@Injectable({
  providedIn: 'root'
})
export class SubmarineService {

  public submarines = [
    { id: 1, name: "INSSunisith", isRegistered: true, isVisible: true },
    { id: 2, name: "INSBalu", isRegistered: true, isVisible: true },
    { id: 3, name: "INSDifferentStar", isRegistered: true, isVisible: true },
    { id: 4, name: "INSDhinchak", isRegistered: true, isVisible: true }
  ]

  constructor(private realtimeService: RealtimeService) {
    this.realtimeService.publish({
      channel: 's_channel', message: { type: 'init', data: this.submarines }
    });
  }

  getSubmarines() {
    return this.submarines;
  }

  addSubmarine(submarine) {
    if (this.isUnique(submarine.name)) {
      let id = this.submarines.length + 1;
      submarine['id'] = id;
      this.submarines.push(submarine);
      this.realtimeService.publish({
        channel: 's_channel', message: { type: 'update', data: this.submarines }
      });
    }
  }

  isUnique(name) {
    let isUnique = true;
    this.submarines.forEach((submarine) => {
      if (submarine.name === name) {
        isUnique = false;
      }
    });
    return isUnique;
  }

}
