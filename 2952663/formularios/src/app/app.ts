import { Component, ComponentRef, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      age: [null, [Validators.required, Validators.min(0), Validators.max(110)]],
      document: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });

    this.form.get('document')?.valueChanges.subscribe((value) => {
      if (/^[0-9]+$/.test(value)) {
        this.form.get('document')?.setValue(value, { emitEvent: false });
      } else {
        this.form.get('document')?.reset(null, { emitEvent: false });
      }
    });
  }

  isInvalid(controlName: string, errorCode: string): boolean {
    const control = this.form.get(controlName);
    return control!.hasError(errorCode) && control!.touched && control!.dirty;
  }

  register() {
    console.log('Es valido: ', this.form.valid);
    console.log('Errores: ', this.form.errors);
    console.log('form', this.form.value);
  }
}
