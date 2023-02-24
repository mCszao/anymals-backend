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
        'insert into pets (pet_name, species, size, weight ,color, sex ) values (?,?,?,?,?,?);',
        [name, size, weight, color, sex, specie]
    );
};

const updateInfos = async (id, name) => {
    console.log('Atualizando dados no banco');
    const conex = await db.connection();
    await conex.query('UPDATE pets SET pet_name = ? WHERE id_pet = ?', [
        name,
        id,
    ]);
};

const deleteInfo = async (id) => {
    console.log('Deletando dados no banco');
    const conex = await db.connection();
    await conex.query('delete from pets where id_pet = ?', id);
};

module.exports = { selectAll, selectId, insertPet, updateInfos, deleteInfo };
