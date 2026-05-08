import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  display = '';
  num1 = '';
  num2 = '';
  operation: string | null = null;
  operationsDiabled = false;

  handleInput(input: string) {
    this.display += input;

    if (input === '=') {
      this.calculate();
      return;
    }

    if (['+', '-', '/', '*'].includes(input)) {
      this.operation = input;
      this.operationsDiabled = true;
      return;
    }

    if (this.operation === null) {
      this.num1 += input;
    } else {
      this.num2 += input;
    }
  }

  calculate() {
    const num1 = Number(this.num1);
    const num2 = Number(this.num2);

    switch (this.operation) {
      case '+':
        this.display = String(num1 + num2);
        break;
      case '-':
        this.display = String(num1 - num2);
        break;
      case '*':
        this.display = String(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          this.display = 'ERROR DIV 0';
        } else {
          this.display = String(num1 / num2);
        }
        break;
    }
    this.operationsDiabled = false;
  }
}
