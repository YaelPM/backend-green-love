const bd = require('../configMysql')

module.exports = {
    postPlant: (plant, callback) => {
        let sql = 'INSERT INTO plants SET ?'
        bd.query(sql, plant, (err, data) => {
            console.log(err);
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
    deletePlant: (plant_id, callback) => {
        let sql = 'DELETE FROM plants WHERE plant_id= ?'
        bd.query(sql, plant_id, (err, data) => {
            console.log(err);
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
    getPlants: (callback) => {
        let sql = 'SELECT * FROM plants'
        bd.query(sql, (err, data) => {
            if (err) throw err
            if (data.length > 0)
                callback(data)
            else
                callback(null)
        })
    },
    updatePlant: (plant_id, plant, callback) => {
        let sql = 'UPDATE plants SET ? WHERE plant_id= ?'
        bd.query(sql, [plant, plant_id], (err, data) => {
            console.log(err);
            if (err)
                return callback(null)
            else
                return callback(data)
        })
    },
}