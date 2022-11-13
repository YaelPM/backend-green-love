const questionsDAO = require('../DAO/questionsDAO')

const deleteQuestion = (req, res) => {
    questionsDAO.deleteQuestion(req.params.question_id, (data) => {
        try {
            if (!data) throw new Err("Error")
            res.send({
                status: true,
                message: 'Pregunta eliminada exitosamente',
                data: data
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido eliminar la pregunta',
                data: null
            })
        }
    })
}

const updateQuestion = (req, res) => {
    const question = {
        question: req.body.question,
        id_user: req.body.id_user
    }
    questionsDAO.updateQuestion(req.params.question_id, question, (data) => {
        try {
            if (!data) throw new Err("Error")
            res.send({
                status: true,
                message: 'Pregunta actualizada exitosamente',
                data: data
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido actualizar la pregunta',
                data: null
            })
        }
    })
}

const getQuestions = (req, res) => {
    questionsDAO.getQuestions((data) => {
        try {
            if (!data) throw new Err("Error")
            res.send({
                status: true,
                message: 'Preguntas obtenidas correctamente',
                data: data
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido obtener las preguntas o no existe alguna aun',
                data: null
            })
        }
    })
}

const postQuestion = (req, res) => {
    const question = {
        question: req.body.question,
        id_user: req.body.id_user
    }

    questionsDAO.postQuestion(question, (data) => {
        res.send({
            status: true,
            message: 'Pregunta creada exitosamente',
            data: data
        })
    }, err => {
        res.send({
            status: false,
            message: 'Ha ocurrido un error al crear la pregunta',
            errorMessage: err
        })
    })
}

module.exports = {
    getQuestions,
    postQuestion,
    deleteQuestion,
    updateQuestion
}