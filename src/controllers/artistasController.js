const artistaModel = require("../models/artistasModel.js");

const getAllArtistas = async (req, res) => {
    try {
        const artistas = await artistaModel.getArtistas();
        res.json(artistas);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Artistas." });
    }
};

const getArtista = async (req, res) => {
    try {
        const artista = await artistaModel.getArtistaById(req.params.id);
        if (!artista) {
            return res.status(404).json({ message: "Artista não encontrado." });
        }
        res.json(artista);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Artista." });
    }
};

const createArtista = async (req, res) => {
    try {
        const {name, photo, country } = req.body;
        const newCountry = await artistaModel.createArtista(name, photo, country);
        res.status(201).json(newCountry);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar o Artista." });
    }
};

const deleteArtista = async (req, res) => {
    try {
        const message = await artistaModel.deleteArtista(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Artista." });
    }
};

const updateArtista = async (req, res) => {
    try {
        const { name, photo, country } = req.body;
        const updateArtista = await artistaModel.updateArtista(req.params.id, name, photo, country);
        if (!updateArtista) {
            return res.status(404).json({ message: "Artista não encontrado." });
        }
        res.json(updateArtista);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Artista." });
    }
};

module.exports = { getAllArtistas, getArtista, createArtista, deleteArtista, updateArtista };