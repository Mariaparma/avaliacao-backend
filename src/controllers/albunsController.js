const albumModel = require("../models/albunsModel.js");

const getAllalbuns = async (req, res) => {
    try {
        const { name } = req.query;
        const albuns = await albumModel.getAlbuns(name);
        res.json(albuns);
    } catch (error) { 
        res.status(500).json({ message: "Erro ao buscar Album." });
    }
};

const getAlbum = async (req, res) => {
    try {
        const album = await albumModel.getAlbumById(req.params.id);
        if (!album) {
            return res.status(404).json({ message: "Album não encontrado." });
        }
        res.json(album);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Album." });
    }
};

const createAlbum = async (req, res) => {
    try {
        const { name, artista_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newAlbum = await albumModel.createWizard(name, photo, artista_id);
        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar Album." });
    }
};


const deleteAlbum = async (req, res) => {
    try {
        const message = await albumModel.deleteAlbum(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Album." });
    }
};

const updateAlbum = async (req, res) => {
    try {
        const { name, artista_id } = req.body;
        const updateWizard = await albumModel.updateAlbum(req.params.id, name, artista_id);
        if (!updateAlbum) {
            return res.status(404).json({ message: "Album não encontrado." });
        }
        res.json(updateAlbum);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Album." });
    }
};

module.exports = { getAllalbuns, getAlbum, createAlbum, deleteAlbum, updateAlbum };