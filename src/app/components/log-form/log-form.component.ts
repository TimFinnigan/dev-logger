import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Log } from '../../models/Log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  log: string;

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    // Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe(log => {
      console.log(log);
    });
  }

}
