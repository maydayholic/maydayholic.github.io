import { Directive, Input, ElementRef } from '@angular/core';
import { D3Service, Node, ForceDirectedGraph } from '../';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[draggableNode]'
})
export class DraggableDirective {
  // tslint:disable
  @Input('draggableNode') node: Node;
  @Input('draggableInGraph') graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service, private _element: ElementRef) { }

  ngOnInit() {
    this.d3Service.applyDraggableBehaviour(this._element.nativeElement, this.node, this.graph);
  }
}