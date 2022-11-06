const bd = require('../configMysql')

module.exports = {
    getAllUsers: (callback) => {
        let sql = 'SELECT * FROM users'
        bd.query(sql, (err, data) => {
            if (err) throw err
            console.log(err)

            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    },
    postUser: (user, callback) => {
        let sql = 'INSERT INTO users SET ?'
        console.log(user);
        bd.query(sql, user, (err, data) => {
            console.log(err);
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    }
}