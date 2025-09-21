// js/views/LandingView.js
export class LandingView {
    render() {
        console.log('LandingView.render called');
        return `
            <div class="container">
                <div class="landing-container">
                    <h1>Welcome to TranspiraFund</h1>
                    <p>Your investment and funding management platform.</p>
                    <div class="row">
                        <button class="btn btn-primary" data-route="login">Login</button>
                        <button class="btn btn-ghost" data-route="register">Register</button>
                    </div>
                    <p style="margin: 1.5rem 0; color: #9aa4b2;">or</p>
                    <button class="btn btn-google" id="googleLogin">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
                        Continue with Google
                    </button>
                </div>
            </div>
        `;
    }

    bindEvents(controller) {
        const googleBtn = document.getElementById('googleLogin');
        if (googleBtn) {
            googleBtn.addEventListener('click', () => controller.handleGoogleLogin());
        }
    }
}