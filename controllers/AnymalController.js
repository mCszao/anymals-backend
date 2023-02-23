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
    const { name = 'default', size, weight, color, sex, specie } = object;
    try {
        await AnymalServices.insertPet(name, size, weight, color, sex, specie);
    } catch (error) {
        console.log(error);
        return;
    }
};

module.exports = { allPets, petById, addPetFull };
