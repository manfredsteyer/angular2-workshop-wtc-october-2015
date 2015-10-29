import { Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { EditForm } from '../edit-form/edit-form';
import { FlugService } from '../../services/flug-service';

@Component({})
@View({
	templateUrl: 'app/components/flug-edit/flug-edit.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, EditForm]
})
export class FlugEdit {
	
	id;
	flug;
	flugService: FlugService;
	message;
	
	save() {
		this.flugService.save(this.flug).subscribe(f => {
			this.message = "Gespeichert!!";
		})
	}
	
	constructor(params: RouteParams, flugService: FlugService) {
		this.id = params.get('id');	
		this.flugService = flugService;
		
		this.flugService
			.findById(this.id)
			.subscribe(f => {
				this.flug = f;
			});
		
	}
	
	info = "Hier könnte auch Ihr Flug stehen!";
	
}