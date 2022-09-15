import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four.component';
import { FiveDirective } from './five.directive';
import { EightPipe } from './eight.pipe';
import { Second2Component } from './second2/second2.component';

@NgModule(
{
  declarations: [
			AppComponent,
			SecondComponent,
			ThirdComponent,
			FourComponent,
			FiveDirective,
			EightPipe,
			Second2Component
  ],
  imports: [
			BrowserModule,
			AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}
)
export class AppModule 
{ 


}
