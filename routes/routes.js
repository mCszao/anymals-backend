const express = require('express');
const AnymalController = require('../controllers/AnymalController');
const routes = express.Router();

routes.use(express.json());

routes.get('/', (req, res) => {
    res.json({ lang: 'js' });
});

routes.get('/animals', async (req, res) => {
    try {
        res.json(await AnymalController.allPets());
    } catch (error) {
        res.send(error);
    }
});

routes.get('/animals/:id', async (req, res) => {
    try {
        res.json(await AnymalController.petById(req.params.id));
    } catch (e) {
        throw e;
    }
});

routes.put('/animals/:id', async (req, res) => {
    try {
        await AnymalController.editById(req.params.id, req.body);
    } catch (error) {
        console.log(error);
    }
    res.end();
});

routes.post('/animals', async (req, res) => {
    try {
        await AnymalController.addPetFull(req.body);
    } catch (error) {
        console.log(error);
    }
    res.end();
});

routes.delete('/animals/:id', async (req, res) => {
    try {
        await AnymalController.deleteAnymal(req.params.id);
    } catch (error) {
        console.log(error);
    }
    res.end();
});

module.exports = routes;
