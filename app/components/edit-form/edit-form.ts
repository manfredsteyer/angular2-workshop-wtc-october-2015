
import { Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES, EventEmitter } from 'angular2/angular2';
import { Input, Output } from 'angular2/angular2';

// <edit-form [data]="flug" [title]="Flüge editieren" (save)="save()"> 
@Component({
	selector: 'edit-form'
})
@View({
	templateUrl: 'app/components/edit-form/edit-form.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class EditForm {
	
	@Input() data: any;
	@Input() title: string;
	@Output() save = new EventEmitter();
	
	innerSave() {
		this.save.next(this.data);
	}
	
}