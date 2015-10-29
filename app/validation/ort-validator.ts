import { Control, Directive, Provider, NG_VALIDATORS } from 'angular2/angular2';

@Directive({
	selector: '[city]', 
	bindings: [new Provider(NG_VALIDATORS, {useValue: OrtValidator.validate, multi: true})]
}) 
export class OrtValidator {
	
	static validate(control: Control): any {

		var cities = ['Graz', 'Hamburg', 'München', 'Rom'];
				
		if (!control.value) return {};

		if (cities.find(c => c == control.value)) return {};
		
		return {
			city: true
		};
		
	}
	
}