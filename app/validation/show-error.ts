import { Component, View, CORE_DIRECTIVES, Host, NgForm } from 'angular2/angular2';

/*
<show-error 
   control="von" 
   [errors]="['required']"></show-error>
*/   
@Component(
	{
		selector: 'show-error', 
		inputs: ['controlPath: control', 'errorTypes: errors']}) 
@View({ 
  template: ` 
    <span *ng-if="errorMessage !== null">{{errorMessage}}</span> 
  `, 
  directives: [CORE_DIRECTIVES] 
}) 
export class ShowError { 
  formDir; 
  controlPath: string; 
  errorTypes: string[]; 

  constructor(@Host() formDir: NgForm) { this.formDir = formDir; } 

  get errorMessage(): string { 
    var control = this.formDir.form.find(this.controlPath); 
    if (control != null && control.touched) { 
      for (var i = 0; i < this.errorTypes.length; ++i) { 
        if (control.hasError(this.errorTypes[i])) { 
          return this._errorMessage(this.errorTypes[i]); 
        } 
      } 
    } 
    return null; 
  } 

  _errorMessage(code: string): string { 
    var config = {
      'required': 'Pflichtfeld!', 
      'city': 'Unbekannte Stadt!',
      'minlength': 'Zu kurz',
      'maxlength': 'Zu lang'
    }; 
    return config[code]; 
  } 
} 
 
