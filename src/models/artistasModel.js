const pool = require("../config/database.js");

const getArtistas = async (country) => {
    let query = "SELECT * FROM artistas";
    const params = [];

    if (country) {
        query += " WHERE country = $1";
        params.push(country);
    }

    const result = await pool.query(query, params);
    return result.rows;
};

const getArtistaById = async (id) => {
    const result = await pool.query("SELECT * FROM artistas WHERE id = $1", [id]);
    return result.rows[0];
};

const createArtista = async (name, photo, country) => {
    const result = await pool.query(
        "INSERT INTO artistas (name, photo, country) VALUES ($1, $2, $3) RETURNING *",
        [name, photo, country]
    );
    return result.rows[0];
};

const deleteArtista = async (id) => {
    const result = await pool.query("DELETE FROM artistas WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Artista não encontrado." };
    }

    return { message: "Artista deletado com sucesso." };
};

const updateArtista = async (id, name, photo, country) => {
    const result = await pool.query(
        "UPDATE artistas SET name = $1, photo = $2, country = $3 WHERE id = $4 RETURNING *",
        [name, photo, country, id]
    );
    return result.rows[0];
};

module.exports = { getArtistas, getArtistaById, createArtista, deleteArtista, updateArtista };