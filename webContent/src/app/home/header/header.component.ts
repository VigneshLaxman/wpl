import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wpl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ["t : title", "c : color"],
  interpolation : ["#","#"]
})
export class HeaderComponent implements OnInit {
  @Input('c') color : string; // Overrides metadata
  constructor() { 
    //console.log(this.color);
  }

  ngOnInit() {
  }
  
  

}
