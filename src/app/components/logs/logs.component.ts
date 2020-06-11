import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string,
    text: string,
    date: any
  }[];

  constructor() { }

  ngOnInit(): void {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:32') },
      { id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:34:02') },
      { id: '3', text: 'Added logs component', date: new Date('12/27/2017 1:55:52') },
    ]
  }

}
