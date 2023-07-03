import { Component } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  constructor(private accountService: AccountService) { }

  logout() {
    this.accountService.logout();
  }

}
