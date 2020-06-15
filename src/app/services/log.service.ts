import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from "rxjs";
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:32') },
      { id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:34:02') },
      { id: '3', text: 'Added logs component', date: new Date('12/27/2017 1:55:52') },
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }
}
