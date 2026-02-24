import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  private _texts: string[] = [];

  add(data: string) {
    this._texts.push(data);
  }

  delete(index: number) {
    this._texts.splice(index, 1);
  }

  get texts() {
    return this._texts;
  }
}
