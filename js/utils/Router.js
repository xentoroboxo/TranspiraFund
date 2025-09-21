// js/utils/Router.js
export class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        console.log('Router constructed');
    }

    register(path, view, controller) {
        this.routes[path] = { view, controller };
    }

    navigate(path) {
        const route = this.routes[path];
        if (route) {
            this.currentRoute = path;
            this.render(route);
            window.history.pushState({}, '', `#${path}`);
        }
    }

    render(route) {
        const app = document.getElementById('app');
        if (!app) {
            console.error('App element not found');
            return;
        }
        
        let content;
        // If the route's view expects a user (dashboard-like), provide currentUser when authenticated
        try {
            const hasAuth = route.controller && route.controller.auth;
            const isAuth = hasAuth && typeof route.controller.auth.isAuthenticated === 'function' && route.controller.auth.isAuthenticated();
            if (isAuth && route.controller.auth.currentUser) {
                // pass current user to view.render if the view supports a parameter
                content = route.view.render(route.controller.auth.currentUser);
            } else {
                content = route.view.render();
            }
        } catch (err) {
            console.warn('Router.render auth check failed, rendering without user:', err);
            content = route.view.render();
        }
        
        if (!content) {
            console.error('View rendered empty content');
            return;
        }

        app.innerHTML = content;
        
        if (route.view.bindEvents && route.controller) {
            route.view.bindEvents(route.controller);
        }
    }

    init() {
        window.addEventListener('popstate', () => {
            const path = window.location.hash.slice(1) || 'landing';
            this.navigate(path);
        });

        const initialPath = window.location.hash.slice(1) || 'landing';
        this.navigate(initialPath);
    }
}