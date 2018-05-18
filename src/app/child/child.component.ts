import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name = "name";
  @Output() nameChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  update() {
    this.nameChange.emit(this.name)
  }

}
