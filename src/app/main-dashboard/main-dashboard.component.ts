import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  @Output() submitNewTask = new EventEmitter();

  task;
  comment;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.submitNewTask.emit({ task: this.task, comment: this.comment });
  }
}
