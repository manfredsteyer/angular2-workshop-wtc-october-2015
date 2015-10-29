import { Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, NgIf, Inject } from 'angular2/angular2';
import { FormBuilder, ControlGroup, Validators } from 'angular2/angular2';
import { OrtValidator } from './../../validation/ort-validator';
// import {MY_DIRECTIVES} from './../registry';

import { FlugService } from './../../services/flug-service';
import { OrtPipe } from './../../pipes/ort-pipe';

@Component({
	selector: 'flug-suchen'
})
@View({
	templateUrl: 'app/components/flug-suchen2/flug-suchen.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
	pipes: [OrtPipe]
})
export class FlugSuchen2 {
	
	fluege = [];
	message;
	selectedFlug;
	flugService: FlugService;
	filter: ControlGroup;
	
	constructor(
		/*@Inject(FlugService)*/ flugService: FlugService,
		fb: FormBuilder) { 
		
		this.flugService = flugService;
		this.filter = fb.group({
			von: ['Graz', 
					Validators.compose([
						Validators.required,
						OrtValidator.validate,
						/*(control):any => {
							if (this.filter.value.von == this.filter.value.nach) {
								return {
									city: true
								}
								return {}
							}	
						},*/
						Validators.minLength(2)])],
			nach: ['Hamburg', 
					Validators.compose([
						Validators.required, 
						OrtValidator.validate,
						Validators.minLength(2)])]
		});	
	}
	
	doStuff() {
		return "stuff";
	}
	
	suchen() {
		
		var filter = this.filter.value;
		
		this
			.flugService
			.find(filter.von, filter.nach)		
			.subscribe(f => {
				this.fluege = f;
			});
		
	}
	
	selectFlug(flug) {
		this.selectedFlug = flug;
	}
	
}