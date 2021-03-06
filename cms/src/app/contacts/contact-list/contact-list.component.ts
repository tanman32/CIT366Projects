import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../contact.model';
import {ContactService} from '../contact.service';
import {Document} from '../../documents/document.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

 // @Output() selectedContactEvent = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactChangedEvent
      .subscribe((contactsArray: Contact[] ) => {
        // Documents array is assigned to documents class variable
        this.contacts = contactsArray;
      });
  }

  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
