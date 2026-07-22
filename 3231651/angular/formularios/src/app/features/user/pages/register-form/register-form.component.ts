import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  // Creación de RF de forma manual
  // form2 = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  //   age: new FormControl(),
  // });

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: [
        null,
        [Validators.required, Validators.min(1), Validators.max(120)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  isInvalid(controlName: string, errorCode: string): boolean {
    const control = this.form.get(controlName);

    if (!control) {
      return true;
    }

    const hasError = control.hasError(errorCode);
    const touched = control.touched;

    return hasError && touched;
  }

  onClick() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log(this.form.get('name')?.hasError('required'));
      console.log(this.form.get('name')?.hasError('minlength'));
    }
  }
}
