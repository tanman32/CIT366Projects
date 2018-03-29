import {EventEmitter, Injectable, Output} from '@angular/core';
import {MOCKMESSAGES} from './MOCKMESSAGES';
import {Message} from './message.model';


@Injectable()
export class MessageService {

  messages: Message[] = [];
  // @Output() messageSelectedEvent: EventEmitter<Message> = new EventEmitter<Message>();
  @Output() messageChangeEvent = new EventEmitter<Message[]>(); // You need this for below code
  constructor() {
    this.messages = MOCKMESSAGES;
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    return this.messages.filter((message: Message) => {
      return message.id === id;
    })[0] || null;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangeEvent.emit(this.messages.slice());
  }
}
