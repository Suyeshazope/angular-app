import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceServiceService {

	url = "http://192.168.1.127:8080/api/v1"

	constructor(private http: HttpClient) { };

	getAttendance() {
		return this.http.get(`${this.url}/count`);
	}
}
