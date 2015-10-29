import {bootstrap, FORM_PROVIDERS, provide} from 'angular2/angular2';
import {FlugSuchen2} from './components/flug-suchen2/flug-suchen2';
import {FlugService} from './services/flug-service';
import {BASE_URL} from './token';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, View} from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Location} from 'angular2/router';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {FlugSuchen} from './components/flug-suchen/flug-suchen';
import {Home} from './components/home/home';
import {FlugEdit} from './components/flug-edit/flug-edit';


@Component({
	selector: 'app'
})
@View({
	directives: [ROUTER_DIRECTIVES],
	templateUrl: 'app/app.html'
})
@RouteConfig([
	{ path: '/', component: Home, as: 'Home' },
	{ path: '/flug-suchen', component: FlugSuchen, as: 'FlugSuchen' },
	{ path: '/flug-edit/:id', component: FlugEdit, as: 'FlugEdit' }	
])
// ...#/flug-edit/7
export class App {
	title;
	location: Location;
	
	constructor(location: Location) {
		this.title = "Flug-Demo-App";
		this.location = location;
	}
	
	isActive(path): boolean {
		return (this.location.path() == path);
	}
}


var provider = [
	FORM_PROVIDERS,
	HTTP_PROVIDERS,
	provide(FlugService, { useClass: FlugService }),
	provide(BASE_URL, { useValue: 'http://www.angular.at'}),
	ROUTER_PROVIDERS, 
	provide(LocationStrategy, {useClass: HashLocationStrategy}),
	Location
];

bootstrap(App, [provider]);
