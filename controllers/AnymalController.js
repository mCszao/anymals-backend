const AnymalServices = require('../services/AnymalServices');
const allPets = async () => {
    const data = await AnymalServices.selectAll();
    return data;
};

const petById = async (id) => {
    try {
        const data = await AnymalServices.selectId(id);
        return data;
    } catch (error) {
        return console.log(id + 'não existente');
    }
};

const addPetFull = async (object) => {
    const { name, size, weight, color, sex, specie } = object;
    try {
        await AnymalServices.insertPet(name, size, weight, color, sex, specie);
    } catch (error) {
        console.log(error);
        return;
    }
};

const editById = async (id, json) => {
    const { name, size, weight, color, sex, specie } = json;
    try {
        await AnymalServices.updateInfos(
            id,
            name,
            size,
            weight,
            color,
            sex,
            specie
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = { allPets, petById, addPetFull, editById };
