import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private __authenticated = false;
    private __email = 'alejo@email.com';
    private __password = '12345';

    login(email: string, password: string) {
        if (email === this.__email && password === this.__password) {
            this.__authenticated = true;
        }
    }

    logout() {
        this.__authenticated = false;
    }

    get authenticated() {
        return this.__authenticated;
    }
}
