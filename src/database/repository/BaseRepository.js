const db = require('../db');

class BaseRepository {
    constructor() {
        this.db = db;
    }
}

module.exports = BaseRepository;