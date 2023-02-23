const db = require('../db');

const selectAll = async () => {
    const conex = await db.connection();
    const [data] = await conex.query('Select * from pets');
    return data;
};

const selectId = async (id) => {
    const conex = await db.connection();
    const [data] = await conex.query(
        'select * from pets where id_pet = ?;',
        id
    );
    return data;
};

const insertPet = async (object) => {
    const conex = db.connection();
    const { name, specie, size, weight, color, sex } = object;
    await conex.query(
        'insert into pets (pet_name, size, weight,color, sex, species ) values (?,?,?,?,?,?)',
        name,
        size,
        weight,
        color,
        sex,
        specie
    );
};

module.exports = { selectAll, selectId, insertPet };
