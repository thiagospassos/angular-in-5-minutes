import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  person = { 
    name: "John Doe", 
    dob: new Date(1990, 5, 10), 
    position: 'Software Developer', 
    salary: 80000 };
}
