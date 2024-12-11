import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AttendanceServiceService } from '../attendance-service.service';
import { WatchComponent } from '../watch/watch.component';

@Component({
	selector: 'app-attendance-page',
	imports: [CommonModule , WatchComponent],
	templateUrl: './attendance-page.component.html',
	styleUrl: './attendance-page.component.css'
})
export class AttendancePageComponent implements OnInit{
	date: string = new Date().toISOString().split('T')[0];
	time: string = ''
	employeePresent!: number;
	// defaultDate: Date = new Date();
	constructor(private attendanceService: AttendanceServiceService) { };

	ngOnInit(): void {
		this.setTime();
		this.getAttendance();
	}


	setTime() {
		const now = new Date();
		this.time = now.toLocaleTimeString();
		console.log("time out of loop", this.time);
		
		// setInterval(() => {
		// 	const now = new Date();
		// this.time = now.toLocaleTimeString();
		// console.log("time : ", this.time);
		// } , 1000)
	}

	getAttendance() {
		this.attendanceService.getAttendance().subscribe((data : any) => {
			this.employeePresent = data;
		})
	}

}
