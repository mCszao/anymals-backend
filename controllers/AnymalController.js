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

const addPetFull = async (json) => {
    await AnymalServices.insertPet(json);
};

module.exports = { allPets, petById, addPetFull };
