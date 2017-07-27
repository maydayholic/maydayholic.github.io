import { Directive, Input, ElementRef } from '@angular/core';
import { D3Service } from '../';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[zoomableOf]'
})
export class ZoomableDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('zoomableOf') containerElement: ElementRef;

  constructor(private d3Service: D3Service, private _element: ElementRef) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.d3Service.applyZoomableBehaviour(this.containerElement, this._element.nativeElement);
  }
}
