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

const insertPet = async (name, size, weight, color, sex, specie) => {
    console.log('Acessando dados no banco');
    const conex = await db.connection();
    await conex.query(
        'insert into pets (pet_name, size, weight,color, sex, species ) values (?,?,?,?,?,?);',
        [name, size, weight, color, sex, specie]
    );
};

const updateInfos = async (id, name, size, weight, color, sex, specie) => {
    console.log('Atualizando dados no banco');
    const conex = await db.connection();
    conex.query(
        'UPDATE pets SET pet_name = ?, size = ?, weight = ?, color = ?, sex = ?, specie = ? WHERE id = ?',
        [name, size, weight, color, sex, specie, id]
    );
};
module.exports = { selectAll, selectId, insertPet, updateInfos };
