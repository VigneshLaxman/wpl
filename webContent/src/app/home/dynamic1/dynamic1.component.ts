import { Component, OnInit, Input, OnChanges, SimpleChange, OnDestroy } from '@angular/core';

@Component({
  selector: 'wpl_dynamic',
  template: `
    <p>
      dynamic1 works!
      {{abc}}
    </p>
  `
})
export class Dynamic1Component implements OnInit, OnChanges, OnDestroy  {
  @Input() data: string;
  constructor() { }

  ngOnInit() {
    console.log('init');
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(changes);
  }
  ngOnDestroy() {
    console.log('destroy');
  }
}
