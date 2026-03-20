import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordCharacters } from './validators/passwordCharacters.validator';

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
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastname: [
        {
          value: null,
          disabled: true,
        },
        [Validators.required, Validators.minLength(3)],
        { disabled: true },
      ],
      email: [
        null,
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      age: [
        null,
        [Validators.required, Validators.min(1), Validators.max(110)],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=(?:.*\d){3,})(?=(?:.*[!@#$%^&*()\-_=+{}\[\]|\\:;"'<>,.?/]){3,}).{8,}$/,
          ),
        ],
      ],
    });

    this.form.get('name')?.valueChanges.subscribe({
      next: (value) => {
        if (value === 'Alejo') {
          this.form.get('lastname')?.enable();
        } else {
          this.form.get('lastname')?.disable();
        }
      },
    });
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
    if (this.form.invalid) {
      alert('FORMULARIO INVÁLIDO');
    }
  }

  hasError(controlName: string, errorName: string) {
    const control = this.form.get(controlName);
    const touched = control?.touched;
    const dirty = control?.dirty;
    return control?.hasError(errorName) && touched && dirty;
  }

  isControlValid(controlName: string) {
    return this.form.get(controlName)?.valid;
  }

  isControlInvalid(controlName: string) {
    const control = this.form.get(controlName);
    const touched = control?.touched;
    const dirty = control?.dirty;
    return this.form.get(controlName)?.invalid && touched && dirty;
  }
}
