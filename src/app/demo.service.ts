import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  showAlert(){
    alert('Hello World!!!');
  }
}
