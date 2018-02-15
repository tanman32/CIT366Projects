import { Component, OnInit } from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [new Message('1', 'Conman', 'Hello World!', '1')
    , new Message('2', 'Tanner', 'Goodbye!', '2')
    , new Message('3', 'Sharnoel', 'We are Sparta!', '3')];
  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
