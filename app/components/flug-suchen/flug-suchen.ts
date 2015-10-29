import { Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, NgIf, Inject } from 'angular2/angular2';
// import {MY_DIRECTIVES} from './../registry';
import { FlugService } from './../../services/flug-service';
import { OrtPipe } from './../../pipes/ort-pipe';
import { OrtValidator } from './../../validation/ort-validator';
import { ShowError} from './../../validation/show-error';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
	selector: 'flug-suchen'
})
@View({
	templateUrl: 'app/components/flug-suchen/flug-suchen.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, OrtValidator, ShowError],
	pipes: [OrtPipe]
})
export class FlugSuchen {
	
	von = "Graz";
	nach = "Hamburg";
	fluege = [];
	message;
	selectedFlug;
	flugService: FlugService;
	
	constructor(/*@Inject(FlugService)*/ flugService: FlugService) { 
		this.flugService = flugService;	
	}
	
	doStuff() {
		return "stuff";
	}
	
	suchen() {
		
		this
			.flugService
			.find(this.von, this.nach)		
			.subscribe(f => {
				this.fluege = f;
			});
		
	}
	
	selectFlug(flug) {
		this.selectedFlug = flug;
	}
	
}