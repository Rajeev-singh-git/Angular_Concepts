import { Component, } from '@angular/core';
//import { type } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements =[{type:'server',name:'TestServer',content:'Just a Test!'}];
}
