import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ContactsService } from '../../services/contacts.service';
import { User } from '../../types/contacts.type';

@Component({
  selector: 'crm-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {
  contacts: User[] = [];
  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    // Better way use redux for storing data but in this case I implement this coz of time limitation
    this.contactsService
      .getAllUsers()
      .pipe(take(1))
      .subscribe((data) => {
        this.contacts = data;
      });
  }
}
