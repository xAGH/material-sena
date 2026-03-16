import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  /*   title = 'alejo';
  price = 18.87;
  name = 'Hola Alejo cómo estás'; */

  constructor(private fb: FormBuilder) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      username: [null],
      age: [null],
      password: [null],
    });
  }

  save() {
    console.log(this.form.value);
  }
}
