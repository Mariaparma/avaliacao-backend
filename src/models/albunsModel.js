const pool = require("../config/database");

const getAlbuns = async (name) => {
   
    if (!name) {
    
        const result = await pool.query(
            `SELECT albuns.*, artistas.name AS artista_name 
            FROM albuns
            LEFT JOIN artistas ON albuns.artista_id = artistas.id`
        );
        return result.rows;
    } else {
        const result = await pool.query(
            `SELECT albuns.*, artistas.name AS artista_name 
                FROM albuns 
                LEFT JOIN artistas ON albuns.artista_id = artistas.id
                WHERE albuns.name ILIKE $1`, [`%${name}%`]
        );
        return result.rows;
    }
};

const getAlbumById = async (id) => {
    const result = await pool.query(
        `SELECT albuns.*, artistas.name AS artista_name 
        FROM albuns
        LEFT JOIN artistas ON albuns.artista_id = artistas.id 
        WHERE wizards.id = $1`, [id]
    );
    return result.rows[0];
};

const createAlbum = async (name,  photo, artista_id) => {
    const result = await pool.query(
        "INSERT INTO albuns (name, photo, artista_id) VALUES ($1, $2, $3) RETURNING *",
        [name, photo, artista_id]
    );
    return result.rows[0];
};


const deleteAlbum = async (id) => {
    const result = await pool.query("DELETE FROM albuns WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Album não encontrado." };
    }

    return { message: "Album deletado com sucesso." };
};

const updateAlbum = async (id, name, photo, artista_id) => {
    const result = await pool.query(
        "UPDATE albuns SET name = $1, artista_id = $2 WHERE id = $3 RETURNING *",
        [name, photo, artista_id, id]
    );
    return result.rows[0]
};

module.exports = { getAlbuns, getAlbumById, createAlbum, deleteAlbum, updateAlbum };