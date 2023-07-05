import { Component } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {

  // isLoggedIn: boolean = false;

  constructor(private accountService: AccountService) {
  }


  logout() {
    this.accountService.logout();
    // this.isLoggedIn = false;
  }

  get isLoggedIn(): boolean {
    return this.accountService.userValue !== null;
  }

}
