import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template: `
    <div>Hello my name is {{sayMyName('revanth')}}.      
    </div>
   `
})
export class AppComponent {
 name: string;
 
 constructor()
 {
 this.name="";
 }
  
  sayMyName(name1:string) {
	this.name=name1;
    console.log('My name is', this.name)
	return this.name;
  }
}
