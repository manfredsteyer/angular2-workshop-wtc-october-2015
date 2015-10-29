import { Injectable, Inject } from 'angular2/angular2';
import { BASE_URL } from '../token';
import { Http, URLSearchParams, Headers } from 'angular2/http';

declare function fetch(url: string): any;

@Injectable()
export class FlugService {

	baseUrl: string;
	http: Http;
	
	constructor(@Inject(BASE_URL) baseUrl, http: Http) {
		this.baseUrl = baseUrl;	
		this.http = http;
	}	
	
	findById(id) {
		var url = this.baseUrl + "/api/flug";
		var params = new URLSearchParams();
		params.append('flugNummer', id);
		
		return this
				.http
				.get(url, {search: params})
				.map(r => r.json());

	}
	
	save(flug) {
		var url = this.baseUrl + "/api/flug";
		
		var headers = new Headers();
		headers.append('Content-Type', 'text/json');
		
		return this
				.http
				.post(url, JSON.stringify(flug), {headers: headers})
				.map(r => r.json());
	}
	
	find(von, nach) {
		
		/*
		var url = this.baseUrl + "/api/flug"
				+ "?abflugOrt=" 
				+ encodeURIComponent(von) 
				+ "&zielOrt=" 
				+ encodeURIComponent(nach);

		return fetch(url).then(r => r.json());
		*/
		
		var url = this.baseUrl + "/api/flug";
		var params = new URLSearchParams();
		params.append('abflugOrt', von);
		params.append('zielOrt', nach);
		
		return this
				.http
				.get(url, {search: params})
				.map(r => r.json());
		
	}
	
}