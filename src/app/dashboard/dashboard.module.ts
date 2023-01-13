import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ContactsComponent],
  providers: [],
})
export class DashboardModule {}
