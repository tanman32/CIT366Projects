import { Injectable, Output, EventEmitter} from '@angular/core';
import {Contact} from './contact.model';
import { MOCKCONTACTS} from './MOCKCONTACTS';
import {Document} from '../documents/document.model';

@Injectable()
export class ContactService {
  contacts: Contact[] = [];
  @Output() contactSelectedEvent: EventEmitter<Contact> = new EventEmitter<Contact>();
  contactChangedEvent: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();
  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  //
  getContact(id: string): Contact {
    return this.contacts.filter((contact: Contact) => {
      return contact.id === id;
    })[0] || null; // Lets figure out what this part means again
  }

  deleteContact(contact: Contact) {
    if (contact === null) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }

    this.contacts.splice(pos, 1);
    this.contactChangedEvent.emit(this.contacts.slice());
  }
}
