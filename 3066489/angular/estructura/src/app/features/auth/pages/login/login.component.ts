import { Component } from '@angular/core';
import { ButtonColor } from 'src/app/shared/enums/button-color';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    loginButtonColor = ButtonColor.SUCCESS
    email: string = "";
    password: string = "";

    onEmailChange(text: string) {
        this.email = text;
    }

    onPasswordChange(text: string) {
        this.password = text;
    }

    onLogin() {
        console.log("Se dio click en login")
    }

    get emailInputIsValid(): boolean {
        const regex = /^\S+@\S+\.\S+$/
        return regex.test(this.email)
    }

}
