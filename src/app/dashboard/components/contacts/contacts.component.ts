import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'crm-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {
  contacts$ = Observable<any>;
  contacts = [];
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService
      .getAllUsers()
      .pipe(take(1))
      .subscribe((data) => {
        this.contacts = data;
      });
  }
}
