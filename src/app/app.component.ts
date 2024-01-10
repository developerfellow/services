import { Component } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 //the way we should not implement
 servers:any;
/*  constructor(){
   const server = new ServersService();
   this.servers = server.getServers();
 } */

 constructor(private server:ServersService ){
   this.servers = server.getServers();
 }

 onClickHandler(){
  this.server.displayAlert();
 }


}
