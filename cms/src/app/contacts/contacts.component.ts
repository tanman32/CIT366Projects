import { Component, OnInit } from '@angular/core';
import {Contact} from './contact.model';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  contacts: Contact[] = [
    new Contact('1', 'Bro. Jackson', 'jacksonk@byui.edu', '208-496-3771',
      'https://web.byui.edu/Directory/Employee/jacksonk.jpg', null),
    new Contact('2', 'Bro. Barzee', 'barzeer@byui.edu', '208-496-3768',
      'https://web.byui.edu/Directory/Employee/barzeer.jpg', null)
  ];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contactSelectedEvent
      .subscribe(
        (contact: Contact) => {
          this.selectedContact = contact;
        }
      );
  }

}
