import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../message.model'; // Not sure if I imported the right thing.

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;
  constructor() { }

  ngOnInit() {
  }

}
