import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter',
})
export class FirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    const parts = value.split(' ');
    const firstLetters = parts.map((v) => v[0]);
    return firstLetters.join(' ');
  }
}
