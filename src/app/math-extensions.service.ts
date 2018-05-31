import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathExtensionsService {

  constructor() { }

  
  bhaskarasFormula(a: number, b: number, c: number) {
    if (a == 0) return 0;
    let delta = Math.sqrt(Math.abs(Math.pow(b, 2) - (4 * a * c)));
    return (-b + delta) / (2 * a);
  }
}
