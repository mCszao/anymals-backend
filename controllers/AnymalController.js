const db = require('../db');
const AnymalServices = require('../services/AnymalServices');
const allPets = async () => {
    const conex = await db.connection();
    const [data] = await conex.query('select * from pets');
    return data;
};

const petById = async (id) => {
    try {
        const conex = await db.connection();
        const [data] = await conex.query(
            'select * from pets where id_pet = ?',
            id
        );
        return data;
    } catch (error) {
        return console.log(id + 'não existente');
    }
};

const addPetFull = async (object) => {
    const { name, specie, size, weight, color, sex } = object;
    try {
        const conex = await db.connection();
        await conex.query(
            'insert into pets (pet_name, species, size, weight, color, sex) values (?,?,?,?,?,?);',
            [name, specie, size, weight, color, sex]
        );
    } catch (error) {
        console.log(error);
        return;
    }
};

const editById = async (id, object) => {
    const { name } = object;
    try {
        const conex = await db.connection();
        await conex.query('update pets set pet_name = ? where id_pet = ?', [
            name,
            id,
        ]);
    } catch (error) {
        console.log(error);
    }
};

const deleteAnymal = async (id) => {
    try {
        const conex = await db.connection();
        await conex.query('delete from pets where id_pet = ?', id);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { allPets, petById, addPetFull, editById, deleteAnymal };
