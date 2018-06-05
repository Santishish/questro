import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Subscriber} from '../models/subscriber';


@Injectable()
export class SubscriberService {

  constructor(private db: AngularFireDatabase) {  }

  createSubscriber(subscriber: Subscriber) {
    return this.db.list('/subscribers').push(subscriber);
  }
}
