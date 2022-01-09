import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 
  //We are using "Output" decorator, b/z we are passing something out of component. We created our own event named "serverCreated" using "newEventEmitter" with the data which we will accept in app.component.html
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
  
  
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  newServerName='';
  newServerContent='';
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    // this.serverElements.push({
    //   type: 'server',
    //   name:this.newServerName,
    //   content:this.newServerContent
    // });
}

  onAddBluePrint(){
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name:this.newServerName,
    //   content:this.newServerContent
    // });
  }


}
