class BaseService {
    throw({ message, status, expose }) {
        const err = new Error(message);
        err.status = status || 500;
        err.expose = expose || false;
        throw err;
    }
}

module.exports = BaseService;