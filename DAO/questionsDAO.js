const bd = require('../configMySql')

module.exports = {
    postQuestion: (question, callback) => {
        let sql = 'INSERT INTO questions SET ?'
        bd.query(sql, question, (err, data) => {
            console.log(err);
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
    deleteQuestion: (question_id, callback) => {
        let sql = 'DELETE FROM questions WHERE question_id= ?'
        bd.query(sql, question_id, (err, data) => {
            console.log(err);
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
    getQuestions: (callback) => {
        let sql = 'SELECT * FROM questions'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    },
    updateQuestion: (question_id, question, callback) => {
        let sql = 'UPDATE questions SET ? WHERE question_id= ?'
        bd.query(sql, [question, question_id], (err, data) => {
            console.log(err);
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
}