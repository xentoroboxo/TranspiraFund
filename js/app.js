import { Router } from './utils/Router.js';
import { AuthController } from './controllers/AuthController.js';
import { LandingView } from './views/LandingView.js';
import { LoginView } from './views/LoginView.js';
import { RegisterView } from './views/RegisterView.js';

class App {
    constructor() {
        this.router = new Router();
        this.authController = new AuthController(this.router);
        this.setupRoutes();
    }

    setupRoutes() {
        // Register routes
        this.router.register('landing', new LandingView(), this.authController);
        this.router.register('login', new LoginView(), this.authController);
        this.router.register('register', new RegisterView(), this.authController);
        
        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            if (e.target.dataset.route) {
                e.preventDefault();
                this.router.navigate(e.target.dataset.route);
            }
        });
    }

    init() {
        this.router.init();
    }
}

// Start the application
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});