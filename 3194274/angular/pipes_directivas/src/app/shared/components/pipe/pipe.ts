import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: false,
  templateUrl: './pipe.html',
  styleUrl: './pipe.scss',
})
export class Pipe {
  name = 'ALEJO';
  price = 20000;
  price2 = 20000.6218372763521635;
  percentage = '65984374.7623';
}
