import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Deepak ToDo List';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Title Changed";
    // }, 2000);
  }  

}
