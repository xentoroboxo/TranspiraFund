// js/views/LoginView.js
export class LoginView {
    render() {
        return `
            <div class="container">
                <div class="auth-container">
                    <h1>Login</h1>
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full">Login</button>
                        <button type="button" class="btn btn-secondary btn-full" data-route="landing">Cancel</button>
                    </form>
                    <p class="small">Don't have an account? <a href="#" data-route="register">Register</a></p>
                </div>
            </div>
        `;
    }

    bindEvents(controller) {
        const form = document.getElementById('loginForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = {
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                };
                controller.handleLogin(formData.email, formData.password);
            });
        }
    }
}