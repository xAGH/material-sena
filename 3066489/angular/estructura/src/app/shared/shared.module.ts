import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

const components = [InputComponent, ButtonComponent, NavbarComponent];

@NgModule({
    declarations: components,
    exports: components,
    imports: [CommonModule, HttpClientModule],
})
export class SharedModule {}
