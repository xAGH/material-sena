import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ButtonColor } from 'src/app/shared/enums/button-color';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginButtonColor = ButtonColor.SUCCESS;
    email: string = '';
    password: string = '';

    constructor(private authService: AuthService) {}

    onEmailChange(text: string) {
        this.email = text;
    }

    onPasswordChange(text: string) {
        this.password = text;
    }

    onLogin() {
        this.authService.login(this.email, this.password);
        console.log(this.authService.authenticated);
    }

    get emailInputIsValid(): boolean {
        const regex = /^\S+@\S+\.\S+$/;
        return regex.test(this.email);
    }
}
