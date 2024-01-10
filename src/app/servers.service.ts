import { Injectable } from '@angular/core';
import { DemoService } from './demo.service';
  @Injectable({
  providedIn: 'root'
}) 


export class ServersService {


  constructor(private demo:DemoService) { }
  private servers:any = [
    {name:'Production Server',status:'online'},
    {name:'Development Server',status:'offline'},
    {name:'Test Server',status:'unknown'}
  ];

  getServers(){
    return this.servers;
  }

  displayAlert(){
    this.demo.showAlert();
  }
}
