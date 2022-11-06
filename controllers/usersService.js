const userDAO = require('../DAO/usersDAO')

const getUsers = (req, res) => {
    userDAO.getAllUsers((data) => {
        try {
            if (!data) throw new Err("Error")
            res.send({
                status: true,
                message: 'Se ha obtenido los usuarios exitosamente',
                data: data
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido obtener los usuarios'

            })
        }
    })
}
const postUser = (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    userDAO.postUser(user, (data) => {
        res.send({
            status: true,
            message: 'Usuario creado exitosamente',
            data: data
        })
    }, err => {
        res.send({
            status: false,
            message: 'Ha ocurrido un error al crear la cuenta de usuario',
            errorMessage: err
        })
    })
}

module.exports = {
    getUsers,
    postUser
}