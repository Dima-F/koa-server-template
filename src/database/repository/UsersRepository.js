const BaseRepository = require('./BaseRepository');

// класи репозиторіїв мають справу із запитами в БД
class UsersRepository extends BaseRepository {
    async getAll() {
        const { rows } = await this.db.query('SELECT * FROM test');
        return rows;
    }
    async findByEmail({ email }) {
        const { rows } = await this.db.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        return rows[0];
    }
    async createOne({ email, passwordHash, salt }) {
        const { rows } = await this.db.query(
            `INSERT INTO users (email, password_hash, salt)
             VALUES($1, $2, $3)
             RETURNING *`,
            [email, passwordHash, salt]
        );
        return rows[0];
    }
}

module.exports = UsersRepository;