import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  standalone: false,
  templateUrl: './create-user-form.html',
  styleUrl: './create-user-form.scss',
})
export class CreateUserForm {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [
        {
          value: null,
          disabled: false, // true para deshabilitar desde el inicio
        },
        [Validators.required, Validators.email],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+/),
        ],
      ],
      ficha: [
        {
          value: null,
          disabled: true,
        },
        [Validators.pattern(/\d{6}/)],
      ],
      name: [null, [Validators.required, Validators.minLength(2)]],
      age: [null, [Validators.required, Validators.min(1), Validators.max(120)]],
    });

    this.form.get('email')!.valueChanges.subscribe({
      next: (data: string | null) => {
        if (data && data.includes('@sena')) {
          this.form.get('ficha')!.enable();
        } else {
          this.form.get('ficha')!.disable();
        }
      },
    });
  }

  onClick() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log(this.form.get('email')!.getError('required'));
      // console.log(this.form.get('email')!.errors);
    }
  }

  hasError(controlName: string, errorCode: string) {
    const control = this.form.get(controlName)!;
    const hasErrorCode = control.hasError(errorCode);
    const dirty = control.dirty;
    const touched = control.touched;

    return hasErrorCode && dirty && touched;
  }
}
