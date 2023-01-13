import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent],
})
export class SideModule {}
