import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  a: number;
  b: number;
  c: number;

  result: number;

  constructor() { }

  ngOnInit() {
  }

  getResult() {
    this.result = this.calculate(this.a, this.b, this.c);
  }

  calculate(a: number, b: number, c: number) {
    if (a == 0) return 0;
    let delta = Math.sqrt(Math.abs(Math.pow(b, 2) - (4 * a * c)));
    return (-b + delta) / (2 * a);
  }

}
