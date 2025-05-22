const albumModel = require("../models/albunsModel.js");

const getAllAlbuns = async (req, res) => {
    const { name, country } = req.query;
    try {
        const albuns = await albumModel.getAlbuns(name, country);
        res.json(albuns);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar álbuns." });
    }
};

const getAlbum = async (req, res) => {
    const { id } = req.params;
    try {
        const album = await albumModel.getAlbumById(id);
        if (!album) {
            return res.status(404).json({ error: "Álbum não encontrado." });
        }
        res.json(album);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar álbum." });
    }
};

const createAlbum = async (req, res) => {
    const { name, photo, artista_id } = req.body;
    try {
        const album = await albumModel.createAlbum(name, photo, artista_id);
        res.status(201).json(album);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar álbum." });
    }
};

const deleteAlbum = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await albumModel.deleteAlbum(id);
        if (result.error) {
            return res.status(404).json(result);
        }
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar álbum." });
    }
};

const updateAlbum = async (req, res) => {
    const { id } = req.params;
    const { name, photo, artista_id } = req.body;
    try {
        const album = await albumModel.updateAlbum(id, name, photo, artista_id);
        if (!album) {
            return res.status(404).json({ error: "Álbum não encontrado." });
        }
        res.json(album);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao atualizar álbum." });
    }
};

module.exports = { getAllAlbuns, getAlbum, createAlbum, deleteAlbum, updateAlbum };