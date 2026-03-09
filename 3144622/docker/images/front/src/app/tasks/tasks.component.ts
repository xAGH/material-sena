import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  newTask = '';

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask() {
    if (!this.newTask.trim()) return;

    this.tasksService.createTask(this.newTask).subscribe(() => {
      this.newTask = '';
      this.loadTasks();
    });
  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id).subscribe(() => this.loadTasks());
  }
}
