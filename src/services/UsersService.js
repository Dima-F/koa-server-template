const { UsersRepository } = require("../database");
const BaseService = require("./BaseService");
const { validatePassword, generateToken, generateSalt, generatePassword } = require('../utils/crypto');

// класи сервісів містять чисту бізнес логіку без контексту koa
class UsersService extends BaseService {
    constructor(){
        super();
        this.repository = new UsersRepository();
    }
    throwAuthError() {
        this.throw({
            message: 'Authentication error',
            status: 401,
            expose: true
        });
    }

    async login({ password, email }) {
        const existingUser = await this.repository.findByEmail({ email});

        if(!existingUser) {
            console.error(`User ${email} not found!`);
            return this.throwAuthError();
        }

        const validPassword = await validatePassword({
            enteredPassword: password,
            savedPassword: existingUser.password_hash,
            salt: existingUser.salt
        });

        if(!validPassword) {
            console.error('Not valid password');
            return this.throwAuthError();
        }

        const token = await generateToken({ user: existingUser });
        return { token }
    }

    async register({ password, email }) {
        const existingUser = await this.repository.findByEmail({ email});

        if(existingUser) {
            return this.throw({
                message: `User ${email} already exists`,
                status: 401,
                expose: true
            });
        }
        const salt = await generateSalt();
        const passwordHash = await generatePassword({ password, salt });
        const newUser = await this.repository.createOne({ salt, email, passwordHash });

        const token = await generateToken({ user: newUser });
        return { token }
    }

}

module.exports = UsersService;