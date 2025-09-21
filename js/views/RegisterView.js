// js/views/RegisterView.js
export class RegisterView {
    render() {
        return `
            <div class="container">
                <div class="auth-container">
                    <h1>Register</h1>
                    <form id="registerForm">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full">Register</button>
                        <button type="button" class="btn btn-secondary btn-full" data-route="landing">Cancel</button>
                    </form>
                    <p class="small">Already have an account? <a href="#" data-route="login">Login</a></p>
                </div>
            </div>
        `;
    }

    bindEvents(controller) {
        const form = document.getElementById('registerForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                };
                controller.handleRegister(formData.name, formData.email, formData.password);
            });
        }
    }
}