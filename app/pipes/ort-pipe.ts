import { Pipe } from 'angular2/angular2';

@Pipe({name:'ort'})
export class OrtPipe {
	
	transform(value, args: Array<any>) {
		
		var fmt = args[0];
		
		switch(value) {
			
			case "Graz":
				if (fmt == 'long') return "Graz Thalerhof";
				if (fmt == 'short') return "GRZ";

			case "Hamburg":
				if (fmt == 'long') return "Hamburg Airport";
				if (fmt == 'short') return "HAM";

			case "München":
				if (fmt == 'long') return "München Franz-Joseph-Strauss";
				if (fmt == 'short') return "MUC";
			
		}
		
		return "ROM";
		
	}
	
}