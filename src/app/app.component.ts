import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'vishnu';
  color;
  changeColor(val){
    this.name = val.value;
    this.color = val.value || 'lightgrey';
    console.log(val);
  }
 
}
