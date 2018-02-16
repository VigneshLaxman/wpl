import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wpl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public title : string;
  public color : string;
  constructor() { 
    this.title = "WPL Header";
    this.color = "red";
  }

  ngOnInit() {
  }

}
