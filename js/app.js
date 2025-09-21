// js/app.js
import { Router } from './utils/Router.js';
import { AuthController } from './controllers/AuthController.js';
import { LandingView } from './views/LandingView.js';
import { LoginView } from './views/LoginView.js';
import { RegisterView } from './views/RegisterView.js';

console.log('js/app.js module loaded');

class App {
    constructor() {
        this.router = new Router();
        this.authController = new AuthController(this.router);
        this.handleNavClick = this.handleNavClick.bind(this);
        console.log('App constructed');
    }

    handleNavClick(e) {
        const route = e.target.dataset.route;
        if (route) {
            e.preventDefault();
            this.router.navigate(route);
        }
    }

    init() {
        try {
            console.log('App.init starting');
            // Register routes
            this.router.register('landing', new LandingView(), this.authController);
            this.router.register('login', new LoginView(), this.authController);
            this.router.register('register', new RegisterView(), this.authController);

            // Setup navigation
            document.addEventListener('click', this.handleNavClick);

            // Start router
            this.router.init();
            console.log('TranspiraFund initialized successfully!');

        } catch (error) {
            console.error('Failed to initialize:', error);
            document.getElementById('app').innerHTML = `
                <div class="container">
                    <div class="error">
                        <h2>Initialization Error</h2>
                        <p>Failed to start the application. Please check console.</p>
                    </div>
                </div>
            `;
        }
    }
}

// Start the application
function startApp() {
    try {
        const app = new App();
        app.init();
    } catch (err) {
        console.error('startApp failed', err);
        const appEl = document.getElementById('app');
        if (appEl) {
            appEl.innerHTML = `<div class="container"><div style="color: #ff5555;">Startup error: ${err.message}</div></div>`;
        }
    }
}

// Also handle if DOM is already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}