import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';

@Component({})
@View({
	templateUrl: 'app/components/home/home.html',
	directives: [CORE_DIRECTIVES]
})
export class Home {
	
	info = "Willkommen bei dieser Demo-Anwendung!";
	
}