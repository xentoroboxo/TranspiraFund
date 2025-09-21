export class User {
    constructor(data = {}) {
        this.id = data.id || null;
        this.name = data.name || '';
        this.email = data.email || '';
        this.createdAt = data.createdAt || new Date();
    }

    static validate(userData) {
        const errors = [];
        
        if (!userData.email || !/\S+@\S+\.\S+/.test(userData.email)) {
            errors.push('Valid email is required');
        }
        
        if (!userData.password || userData.password.length < 6) {
            errors.push('Password must be at least 6 characters');
        }
        
        return {
            isValid: errors.length === 0,
            errors
        };
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            createdAt: this.createdAt
        };
    }
}