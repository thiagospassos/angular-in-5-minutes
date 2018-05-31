import { Component, OnInit } from '@angular/core';
import { MathExtensionsService } from '../math-extensions.service';

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

  constructor(private mathExtensions: MathExtensionsService) { }

  ngOnInit() {
  }

  getResult() {
    this.result = this.mathExtensions.bhaskarasFormula(this.a, this.b, this.c);
  }


}
