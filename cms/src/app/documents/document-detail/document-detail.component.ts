import {Component, OnInit} from '@angular/core';
import {Document} from '../document.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DocumentService} from '../document.service';
import {WindRefService} from '../../wind-ref.service';


@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
   document: Document;
   id: string;
   nativeWindow: any;
  constructor(private documentService: DocumentService,
              private route: ActivatedRoute,
              private router: Router,
              private windSurfer: WindRefService) {
      this.nativeWindow = this.windSurfer.getNativeWindow();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
            this.id = params['id'];
         this.document = this.documentService.getDocument(this.id);
         // this.document =
          // Start of page 14
        }
      );
  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

  onDelete() {
    // Don't forget the keyword this.
    this.documentService.deleteDocument(this.document);
    // route back to the'/documents' URL
    // this.router.navigate(['edit'], {relativeTo: this.route});
    this.router.navigate(['/documents']);
  }

}
