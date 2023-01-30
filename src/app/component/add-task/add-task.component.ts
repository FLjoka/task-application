import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//Subscription Debemos traerlo para poder escuchar cuando se realiza un cambio en la variable
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.text.length === 0) {
      alert('Please add a task!');
      return;
    }
    const { text, day, reminder } = this;
    const newTask = { text, day, reminder };

    //La forma convencional para asignar los varores esta abajo:
    /*const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };*/
    this.onAddTask.emit(newTask);
  }
}
