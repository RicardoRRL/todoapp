import { Component, OnInit } from '@angular/core';

interface Task {
  done: boolean,
  title: string
}

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {

  title = "Mis Tareas";

  tasks: Array<Task>= [];

  inputTask = "Nueva Tarea";

  check = true;

  constructor() { }

  ngOnInit(): void {
    //this.tasks.push("Mi primera tarea", "Mi segunda tarea", "Mi tercera tarea");
  }

  ngOnDestroy() {

  }

  addTask() {
    this.tasks.push({title: this.inputTask, done: false});
  }

  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task),1);
  }

  editTitle() {
    console.log("editado")
  }
}
