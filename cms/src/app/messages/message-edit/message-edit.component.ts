import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from '../message.model';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;
  // @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender = '2';
  constructor(private messagesService: MessageService) { }

  ngOnInit() {
  }

  onSendMessage() {
    const theSub = this.subject.nativeElement.value;
    const theMsgText = this.msgText.nativeElement.value;
    const message = new Message('8', theSub , theMsgText, this.currentSender);
    // this.addMessageEvent.emit(message);
    this.messagesService.addMessage(message);
  }

  onClear() {
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }
  }
