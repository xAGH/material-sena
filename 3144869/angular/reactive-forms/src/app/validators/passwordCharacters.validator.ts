import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordCharacters(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) return null;

    const symbols = '$.-/*'.split('');
    const values = (control.value as string).split('');
    const symbolsRequired = 3;
    let symbolsCounter = 0;

    values.forEach((value) => {
      symbols.forEach((symbol) => {
        if (value === symbol) {
          symbolsCounter += 1;
        }
      });
    });

    const condition = symbolsCounter >= symbolsRequired;

    return condition
      ? null
      : {
          passwordCharacters: {
            value: control.value,
            symbolsRequired,
            symbolsCounter,
          },
        };
  };
}
