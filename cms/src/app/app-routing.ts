import {RouterModule, Routes} from '@angular/router';
import {DocumentsComponent} from './documents/documents.component';
import {MessagesComponent} from './messages/messages.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NgModule} from '@angular/core';

const app_Routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'documents', component: DocumentsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'contacts', component: ContactsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(app_Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
