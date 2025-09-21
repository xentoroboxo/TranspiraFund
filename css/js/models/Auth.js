// js/models/Auth.js
class Auth {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.loadFromStorage();
    }

    async login(email, password) {
        try {
            await this.simulateApiCall();
            
            if (email && password) {
                this.currentUser = new User({
                    id: Date.now(),
                    email,
                    name: email.split('@')[0]
                });
                this.isLoggedIn = true;
                this.saveToStorage();
                return { success: true, user: this.currentUser };
            }
            
            throw new Error('Invalid credentials');
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async register(userData) {
        try {
            const validation = User.validate(userData);
            if (!validation.isValid) {
                throw new Error(validation.errors.join(', '));
            }

            await this.simulateApiCall();
            
            this.currentUser = new User({
                id: Date.now(),
                name: userData.name,
                email: userData.email
            });
            this.isLoggedIn = true;
            this.saveToStorage();
            
            return { success: true, user: this.currentUser };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    logout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.clearStorage();
    }

    async googleLogin() {
        try {
            await this.simulateApiCall();
            
            this.currentUser = new User({
                id: Date.now(),
                email: 'user@gmail.com',
                name: 'Google User'
            });
            this.isLoggedIn = true;
            this.saveToStorage();
            
            return { success: true, user: this.currentUser };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    simulateApiCall() {
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    saveToStorage() {
        console.log('User session saved');
    }

    loadFromStorage() {
        console.log('Loading user session...');
    }

    clearStorage() {
        console.log('User session cleared');
    }
}