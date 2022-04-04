import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css'],
})
export class TasksItemsComponent implements OnInit {
  @Input() task: Task = TASKS[0];

  constructor() {}

  ngOnInit(): void {}
}
