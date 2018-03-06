import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wpl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menus: any[] = [
    {'link': '/health', 'name': 'Health'},
    {'link': '/hotel', 'name': 'Hotel'},
    {'link': '/parking', 'name': 'Parking'},
    {'link': '/workspace', 'name': 'Workspace'},
    ];

}
