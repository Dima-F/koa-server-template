const { TestRepository } = require("../database");
const BaseService = require("./BaseService");

// класи сервісів містять чисту бізнес логіку без контексту koa
class TestService extends BaseService {
    constructor(){
        super();
        this.repository = new TestRepository();
    }

    async getAll() {
        return await this.repository.getAll();
    }

    async createOne({ name }) {
        return await this.repository.createOne({ name });
    }

}

module.exports = TestService;