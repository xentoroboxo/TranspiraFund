export class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
    }

    register(path, view, controller) {
        this.routes[path] = { view, controller };
    }

    navigate(path) {
        const route = this.routes[path];
        if (route) {
            this.currentRoute = path;
            this.render(route);
            // Update URL without page reload
            window.history.pushState({}, '', `#${path}`);
        }
    }

    render(route) {
        const app = document.getElementById('app');
        app.innerHTML = route.view.render();
        
        if (route.view.bindEvents && route.controller) {
            route.view.bindEvents(route.controller);
        }
    }

    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const path = window.location.hash.slice(1) || 'landing';
            this.navigate(path);
        });

        // Set initial route
        const initialPath = window.location.hash.slice(1) || 'landing';
        this.navigate(initialPath);
    }
}