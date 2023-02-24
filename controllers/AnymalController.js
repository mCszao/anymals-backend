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
    const { name, specie, size, weight, color, sex } = object;
    try {
        await AnymalServices.insertPet(name, specie, size, weight, color, sex);
    } catch (error) {
        console.log(error);
        return;
    }
};

const editById = async (id, object) => {
    const { name } = object;
    try {
        await AnymalServices.updateInfos(id, name);
    } catch (error) {
        console.log(error);
    }
};

const deleteAnymal = async (id) => {
    try {
        await AnymalServices.deleteInfo(id);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { allPets, petById, addPetFull, editById, deleteAnymal };
