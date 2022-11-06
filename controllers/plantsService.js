const plantsDAO = require('../DAO/plantsDAO')

const deletePlant = (req, res) => {
    plantsDAO.deletePlant(req.params.plant_id, (data) => {
        try {
            if (!data) throw new Err("Error")
            res.send({
                status: true,
                message: 'Planta eliminada exitosamente',
                data: data
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido eliminar la planta',
                data: null
            })
        }
    })
}

const updatePlant = (req, res) => {
    const plant = {
        name: req.body.name,
        description: req.body.description,
        soil: req.body.soil,
        climate: req.body.climate,
        utilities: req.body.utilities
    }
    plantsDAO.updatePlant(req.params.plant_id, plant, (data) => {
        try {
            if (!data) throw new Err("Error")
            res.send({
                status: true,
                message: 'Planta actualizada exitosamente',
                data: data
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido actualizar la planta',
                data: null
            })
        }
    })
}

const getPlants = (req, res) => {
    plantsDAO.getPlants((data) => {
        try {
            if (!data) throw new Err("Error")
            res.send({
                status: true,
                message: 'Plantas obtenidas correctamente',
                data: data
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'No se ha podido obtener las plantas',
                data: null
            })
        }
    })
}

const postPlant = (req, res) => {
    const plant = {
        name: req.body.name,
        description: req.body.description,
        soil: req.body.soil,
        climate: req.body.climate,
        utilities: req.body.utilities
    }

    plantsDAO.postPlant(plant, (data) => {
        res.send({
            status: true,
            message: 'Planta creada exitosamente',
            data: data
        })
    }, err => {
        res.send({
            status: false,
            message: 'Ha ocurrido un error al crear la planta',
            errorMessage: err
        })
    })
}

module.exports = {
    getPlants,
    postPlant,
    deletePlant,
    updatePlant
}
