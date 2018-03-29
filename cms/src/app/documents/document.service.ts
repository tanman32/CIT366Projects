import {EventEmitter, Injectable, Output} from '@angular/core';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import {Document} from './document.model';

@Injectable()
export class DocumentService {
  documents: Document[] = [];
  @Output() documentSelectedEvent: EventEmitter<Document> = new EventEmitter<Document>();
  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }
  getDocument(id: string): Document {
    return this.documents.filter((document: Document) => {
      return document.id === id;
    })[0] || null;
  }
}