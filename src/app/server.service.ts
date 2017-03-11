import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';

import { Patient } from './patient';
import { Form } from './form';
import { Protocol } from './protocol';
import { AppSettings } from './app-settings';


@Injectable() export class Server{
	private dataUrl=AppSettings.apiEndpoint;
	constructor(private http: Http,public authHttp: AuthHttp){}
	getPatients(uhid? :string): Observable<Patient[]>{
		return this.authHttp.post(this.dataUrl+'getPatients',uhid).map(this.parseBody).catch(this.handleError);
	}
	getProfile(id :number): Observable<Patient>{
		return this.authHttp.post(this.dataUrl+'getProfile',id).map(this.parseBody).catch(this.handleError);
	}
	savePatient(patient: Patient): Observable<Patient>{		
		return this.authHttp.post(this.dataUrl+'savePatient',patient).map(this.parseBody).catch(this.handleError);
	}
	saveForm(form: Form): Observable<string>{
		return this.authHttp.post(this.dataUrl+'saveForm',form).map(this.parseBody).catch(this.handleError);
	}
	getForms(patientid: number): Observable<Form[]>{
		return this.authHttp.post(this.dataUrl+'getForms',patientid).map(this.parseBody).catch(this.handleError);
	}
	getProtocol(type: string): Observable<Protocol>{
		return this.authHttp.post(this.dataUrl+'getProtocol',type).map(this.parseBody).catch(this.handleError);
	}
	saveProtocol(protocol: Protocol): Observable<Protocol>{		
		return this.authHttp.post(this.dataUrl+'saveProtocol',protocol).map(this.parseBody).catch(this.handleError);
	}
	validateProtocol(patient: any,forms: any[]): Observable<any>{
		return this.http.post(this.dataUrl+'validateProtocol',{patient:patient,forms:forms}).map(this.parseBody).catch(this.handleError);
	}
	private parseBody = (res: Response)=>{
		if(res.text()=='fail')throw "Server Internal Error";
		return res.text()=='success'?'success':(res.json()||{});
	}
	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.log(errMsg);
		return Observable.throw(errMsg);
	}
}