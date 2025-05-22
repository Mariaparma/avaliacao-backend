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
        const { name, photo, country } = req.body;
        if (!name || !photo || !country) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios: name, photo, country." });
        }
        const newArtista = await artistaModel.createArtista(name, photo, country);
        res.status(201).json(newArtista);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar o Artista." });
    }
};

const deleteArtista = async (req, res) => {
    try {
        const deleted = await artistaModel.deleteArtista(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Artista não encontrado." });
        }
        res.json({ message: "Artista deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar Artista." });
    }
};

const updateArtista = async (req, res) => {
    try {
        const { name, photo, country } = req.body;
        if (!name || !photo || !country) {
            return res.status(400).json({ message: "Preencha todos os campos obrigatórios: name, photo, country." });
        }
        const updatedArtista = await artistaModel.updateArtista(req.params.id, name, photo, country);
        if (!updatedArtista) {
            return res.status(404).json({ message: "Artista não encontrado." });
        }
        res.json(updatedArtista);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Artista." });
    }
};

module.exports = { getAllArtistas, getArtista, createArtista, deleteArtista, updateArtista };