const db = require('./db');

module.exports = async () => {
    try {
        const res = await db.query('SELECT NOW()');
        console.log(`Successfull db connection, time on server: ${res.rows[0].now}`);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

 