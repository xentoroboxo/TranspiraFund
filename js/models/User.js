export class User {
    constructor(data = {}) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.createdAt = data.createdAt || new Date();
    }

    update(data) {
        Object.assign(this, data);
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