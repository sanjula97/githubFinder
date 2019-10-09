class Github {
    constructor() {
        this.client_id = '77064b2d4c5b5cb6fdf0';
        this.client_secret = '37db878cbc942253212802b8b60188882385189b';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}