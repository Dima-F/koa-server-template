const { env } = process;

module.exports = {
    port: env.PORT,
    jwt: {
        secret: env.JWT_SECRET,
        expiresIn: '1d'
    },
    errors: {
        defaultMessage: 'Internal server error'
    }
};