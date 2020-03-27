import { Injectable } from '@angular/core';
import { RealtimeService } from './realtime.service';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SubmarineService {

  public submarines = [
    { id: 1, name: 'INSSunisith', isRegistered: true, isVisible: true, description: 'Sunisith incorporates a double hull system composed of an inner pressure hull and an outer "light" hull. This allows more freedom in the design of the exterior hull shape, resulting in more reserve buoyancy than its western analogs.' },
    { id: 2, name: "INSBalu", isRegistered: true, isVisible: true, description: 'This submarine is much quieter than earlier submarines and have the SOKS hydrodynamic sensors. This is Improved submarines have six 533 mm decoy launching tubes, as do subsequent submarines.' },
    { id: 3, name: "INSDifferentStar", isRegistered: true, isVisible: true, description: "Bla Bla Bla" },
    { id: 4, name: "INSDhinchak", isRegistered: true, isVisible: true, description: "Bla Bla Bla" }
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
      return {status:'success', message:'Registered the submarine successfully'};
    } else {
      return {status:'error', message:'Submarine name should be Unique'};;
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
