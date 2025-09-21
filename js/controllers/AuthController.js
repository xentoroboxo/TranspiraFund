// js/controllers/AuthController.js
import { Auth } from '../models/Auth.js';

export class AuthController {
    constructor(router) {
        this.auth = new Auth();
        this.router = router;
        console.log('AuthController constructed');
    }

    // Views call handleLogin(email, password)
    async handleLogin(email, password) {
        const result = await this.auth.login(email, password);

        if (result.success) {
            this.router.navigate('landing');
        } else {
            this.showError(result.error);
        }
    }

    // Views call handleRegister(name, email, password)
    async handleRegister(name, email, password) {
        const result = await this.auth.register({ name, email, password });

        if (result.success) {
            this.router.navigate('landing');
        } else {
            this.showError(result.error);
        }
    }

    async handleGoogleLogin() {
        const result = await this.auth.googleLogin();

        if (result.success) {
            this.router.navigate('landing');
        } else {
            this.showError(result.error);
        }
    }

    handleLogout() {
        this.auth.logout();
        this.router.navigate('landing');
    }

    showError(message) {
        alert(`Error: ${message}`);
    }
}