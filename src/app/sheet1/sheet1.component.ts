import { Component } from '@angular/core';
import APP_CONFIG from '../app.config';
import { Node, Link } from '../d3';

@Component({
  selector: 'app-sheet1',
  templateUrl: './sheet1.component.html',
  styleUrls: ['./sheet1.component.css']
})

export class Sheet1Component {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N,
      getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }
}
