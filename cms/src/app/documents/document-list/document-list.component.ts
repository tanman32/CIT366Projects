import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Document} from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [
  new Document ('1', 'Charlie', 'shy', 'http://www.espn.com/', ['Dog', 'German Shepard']),
    new Document ('2', 'Bullet', 'hyper', 'http://www.espn.com/', ['Dog', 'Yellow Lab']),
    new Document ('3', 'Bama', 'runt', 'http://www.espn.com/', ['Dog', 'Black Lab']),
    new Document ('4', 'Rex', 'loving', 'http://www.espn.com/', ['Dog', 'Yellow Lab'])

  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  constructor() { }

  ngOnInit() {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
