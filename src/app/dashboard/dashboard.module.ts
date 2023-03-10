import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProductsComponent } from './components/products/products.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ContactsService } from './services/contacts.service';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ContactsComponent, ProductsComponent, ReportsComponent],
  providers: [ContactsService],
})
export class DashboardModule {}
