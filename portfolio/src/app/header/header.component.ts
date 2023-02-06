import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobile: boolean = false;

  onResize(event: any) {
    if (event.target.innerWidth <= 550) {
      this.mobile = true;
    }
    else {
      this.mobile = false;
    }
  }

}
