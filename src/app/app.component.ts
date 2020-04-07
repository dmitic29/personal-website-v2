import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuIcon = 'menu';

  openCloseMenu() {
    if (this.menuIcon === 'menu') {
      this.menuIcon = 'menu_open';
    } else {
      this.menuIcon = 'menu';
    }
  }

}
