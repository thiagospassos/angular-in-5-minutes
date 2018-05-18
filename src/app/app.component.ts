import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';

  items = [
    { show: true, name: "Item 1", type: "text" },
    { show: true, name: "Item 2", type: "checkbox" },
    { show: false, name: "Item 3", type: "text" }];
    
  update(){
    this.title = "Angular In 5 Minutes";
  }
}
