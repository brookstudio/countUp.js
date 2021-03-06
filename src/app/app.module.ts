import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CountUpModule } from '../count-up/count-up.module';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		CountUpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
