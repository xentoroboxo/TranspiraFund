import { User } from './User.js';

export class Auth {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.loadFromStorage();
    }

    async login(email, password) {
        try {
            // Simulate API call
            await this.simulateApiCall();
            
            // Demo validation
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
            // Validate user data
            const validation = User.validate(userData);
            if (!validation.isValid) {
                throw new Error(validation.errors.join(', '));
            }

            // Simulate API call
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
            // Simulate Google OAuth
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
        // Note: In a real app, you'd save to localStorage
        // For demo purposes, we'll just keep it in memory
        console.log('User session saved');
    }

    loadFromStorage() {
        // Note: In a real app, you'd load from localStorage
        console.log('Loading user session...');
    }

    clearStorage() {
        console.log('User session cleared');
    }
}