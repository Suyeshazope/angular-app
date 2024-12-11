import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-attendance-page',
	imports: [CommonModule],
	templateUrl: './attendance-page.component.html',
	styleUrl: './attendance-page.component.css'
})
export class AttendancePageComponent implements OnInit {
	date: string = new Date().toISOString().split('T')[0];
	time: string = ''
	// defaultDate: Date = new Date();

	ngOnInit(): void {

		this.setTime();

		// setTimeout(() => {
		// 	this.setTime();
		//   }, 60000);

	}

	setTime() {
		const now = new Date();
		this.time = now.toLocaleTimeString();
		console.log("time out of loop" , this.time);
	}

}
