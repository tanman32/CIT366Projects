import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from '../document.model';
import {DocumentsService} from '../documents.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  // @Output() selectedDocumentEvent = new EventEmitter<Document>();
  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.documents = this.documentsService.getDocuments();
  }

  onSelectedDocument(document: Document) {
    this.documentsService.documentsSelectedEvent.emit(document);
  }
}
