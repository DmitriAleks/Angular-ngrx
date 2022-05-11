import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  updateNumber? : number


 
 get cannotDecrease():boolean {
   return this.counter <= 0
 }

  increse():void {
    this.updateNumber= Date.now()
   this.counter++
 }
decrease():void {
  this.updateNumber= Date.now()
  this.counter--
}

clear():void {
  this.updateNumber= Date.now()
  this.counter = 0
}

}
