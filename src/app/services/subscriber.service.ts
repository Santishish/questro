import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Subscriber} from '../models/subscriber';
import {map} from 'rxjs/operators';


@Injectable()
export class SubscriberService {

  constructor(private db: AngularFireDatabase) {  }

  getSubscribers() {
    return this.db.list('subscribers').snapshotChanges().pipe(map(action => {
      return action.map(item => {
        const $key = item.payload.key;
        const data = { $key, ...item.payload.val() };
        return data;
      });
    }));
  }

  createSubscriber(subscriber: Subscriber) {
    return this.db.list('/subscribers').push(subscriber);
  }

  deleteSubscriber(subscriberId: string) {
    return this.db.object(`/subscribers/${subscriberId}`).remove();
  }

}
