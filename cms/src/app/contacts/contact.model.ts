import {Injectable} from '@angular/core';

@Injectable()
export class Contact {
  // public contactId: string;
  // public name: string;
  // public email: string;
  // public phone: string;
  // public imageUrl: string;
  // public group: Array<string>;

  constructor(public id: string,
              public name: string,
              public email: string,
              public phone: string,
              public imageUrl: string,
              public group: Contact[]) {
  }
}
