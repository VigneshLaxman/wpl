import { Directive, ViewContainerRef, Input, OnChanges, SimpleChange, TemplateRef, Renderer2, EventEmitter, ElementRef, Output } from '@angular/core';

@Directive({
  selector: '[wplDynamicHost]',
  inputs : ['param'],
  outputs : ['callbk']
})
export class DynamicHostDirective implements OnChanges {
  @Input() param: string;
  @Output() callbk: EventEmitter<any> = new EventEmitter();
  constructor(public el: ElementRef, public containerRef: ViewContainerRef, public rendeder: Renderer2) {
   }

   ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (!changes.param.firstChange) {
      this.rendeder.setStyle(this.el.nativeElement, 'color', changes.param.currentValue);
    }
    console.log(this);
    this.callbk.emit(['darkgrey', 'test', 'value']);
   }
}
