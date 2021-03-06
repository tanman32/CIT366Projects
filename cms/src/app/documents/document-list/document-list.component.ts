import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from '../document.model';
import {DocumentService} from '../document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  documentId = '';

  // @Output() selectedDocumentEvent = new EventEmitter<Document>();
  constructor(private documentsService: DocumentService) {
    this.documents = this.documentsService.getDocuments();
  }

  ngOnInit() {
    this.documentsService.documentChangedEvent
      .subscribe((documentsArray: Document[] ) => {
        // Documents array is assigned to documents class variable
         this.documents = documentsArray;
      });
  }

}
