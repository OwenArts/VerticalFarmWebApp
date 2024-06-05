class ApiManager {
    static #instance = null;

    constructor() {
        if (ApiManager.#instance) {
            throw new Error("Use ApiManager.getInstance() to get the singleton instance.");
        }
    }

    // Static method to get the singleton instance
    static getInstance() {
        if (!ApiManager.#instance) {
            ApiManager.#instance = new ApiManager();
        }
        return ApiManager.#instance;
    }

    public getAllDrawers(){}
}

export default ApiManager.getInstance();
