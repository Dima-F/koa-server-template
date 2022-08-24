const BaseRepository = require('./BaseRepository');

// класи репозиторіїв мають справу із запитами в БД
class TestRepository extends BaseRepository {
    async getAll() {
        const res = await this.db.query('SELECT * FROM test');
        return res.rows;
    }
    async createOne({ name }) {
        const { rows } = await this.db.query(
            `INSERT INTO test (name)
             VALUES($1)
             RETURNING *`,
            [name]
        );
        return rows[0];
    }
}

module.exports = TestRepository;