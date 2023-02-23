const express = require('express');
const AnymalController = require('../controllers/AnymalController');
const routes = express.Router();

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
    } catch (e) {}
});

routes.post('/animals', async (req, res) => {
    try {
        await AnymalController.addPetFull(req.body);
    } catch (error) {
        console.log(error);
    }
});
routes.get('/animals/:species', (req, res) => {
    const param = req.params.species;
    const filtered =
        param != ''
            ? pets.filter((pet) => pet.species.toLowerCase() === param)
            : [];
    if (filtered.length == 0)
        res.status(404).json({
            error: 'Não foi possível encontrar essa espécie',
        });
    if (filtered.length != 0) res.status(200).json(filtered);
});

routes.get('/animals/sex/:sex', (req, res) => {
    const param = req.params.sex;
    const filtered = pets.filter((pet) => pet.sex.toLowerCase() === param);
    console.log(filtered);
    if (filtered.length != 0) res.status(200).json(filtered);
    if (filtered == 0)
        res.status(404).json({
            error: 'não foi possível localizar animais desse sexo',
        });
});

module.exports = routes;
