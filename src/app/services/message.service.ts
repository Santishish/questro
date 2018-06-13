import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Message} from '../models/message';
import {map} from 'rxjs/operators';

@Injectable()
export class MessageService {

  constructor(private db: AngularFireDatabase) {

  }

  createMessage(message: Message) {
    return this.db.list('/messages').push(message);
  }

  getMessages() {
    return this.db.list('messages').snapshotChanges().pipe(map(action => {
      return action.map((item: any) => {
        const $key = item.payload.key;
        const data = { $key, ...item.payload.val() };
        return data;
      });
    }));
  }

  get(messageId: string) {
    return this.db.object(`/messages/${messageId}`).valueChanges();
  }

  getUnreadMessages () {
    return this.db.list('messages', ref => ref.orderByChild('read').equalTo(false));
  }

  deleteMessage(messageId: string) {
    return this.db.object(`/messages/${messageId}`).remove();
  }

  markAsRead(messageId: string, message: Message) {
    return this.db.object(`/messages/${messageId}`).update({...message, read: true });
  }
}
