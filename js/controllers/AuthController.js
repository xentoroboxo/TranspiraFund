import { Auth } from '../models/Auth.js';

export class AuthController {
    constructor(router) {
        this.auth = new Auth();
        this.router = router;
    }

    async handleLogin(formData) {
        const result = await this.auth.login(formData.email, formData.password);
        
        if (result.success) {
            this.router.navigate('dashboard');
        } else {
            this.showError(result.error);
        }
    }

    async handleRegister(formData) {
        const result = await this.auth.register(formData);
        
        if (result.success) {
            this.router.navigate('dashboard');
        } else {
            this.showError(result.error);
        }
    }

    async handleGoogleLogin() {
        const result = await this.auth.googleLogin();
        
        if (result.success) {
            this.router.navigate('dashboard');
        } else {
            this.showError(result.error);
        }
    }

    showError(message) {
        alert(`Error: ${message}`); // Replace with better UI later
    }
}