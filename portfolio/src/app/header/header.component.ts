import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mobile: boolean = false;
  innerWidth: any;

  ngOnInit(){
    this.innerWidth = window.innerWidth;

    if (this.innerWidth <= 550) {
      this.mobile = true;
    }
    else {
      this.mobile = false;
    }
  }

  onResize(event: any) {
    if (event.target.innerWidth <= 550) {
      this.mobile = true;
    }
    else {
      this.mobile = false;
    }
  }

}
