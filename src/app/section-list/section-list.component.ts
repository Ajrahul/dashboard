import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.scss']
})
export class SectionListComponent implements OnInit {

  constructor() { }

  public show = true;
  // // public buttonName: any = 'Show';

  // visible = true;
  // @Output() open: EventEmitter<any> = new EventEmitter();
  // @Output() close: EventEmitter<any> = new EventEmitter();
  ngOnInit() {
    this.toggle();
  }

  toggle() {
    this.show = !this.show;
   }

}
