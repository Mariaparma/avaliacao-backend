const express = require("express");
const router = express.Router();
const artistasController = require("../controllers/artistasController.js");
const apiKeyMiddleware = require("../config/apiKey.js");
router.use(apiKeyMiddleware);

/**
 * @swagger
 * tags:
 *   name: Artistas
 *   description: Gerenciamento de Artistas
 */

/**
 * @swagger
 * /api/artistas:
 *   get:
 *     summary: Lista todos os artistas
 *     tags: [Artistas]
 *     parameters:
 *       - in: query
 *         name: country
 *         schema:
 *           type: string
 *         description: Filtro por país
 *     responses:
 *       200:
 *         description: Lista de artistas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   photo:
 *                     type: string
 *                   country:
 *                     type: string
 */
router.get("/artistas", artistasController.getAllArtistas);

/**
 * @swagger
 * /api/artistas/{id}:
 *   get:
 *     summary: Busca artista por ID
 *     tags: [Artistas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do artista
 *     responses:
 *       200:
 *         description: Artista encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 photo:
 *                   type: string
 *                 country:
 *                   type: string
 *       404:
 *         description: Artista não encontrado
 */
router.get("/artistas/:id", artistasController.getArtista);

/**
 * @swagger
 * /api/artistas:
 *   post:
 *     summary: Cria um novo artista
 *     tags: [Artistas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Artista criado
 */
router.post("/artistas", artistasController.createArtista);

/**
 * @swagger
 * /api/artistas/{id}:
 *   delete:
 *     summary: Deleta um artista
 *     tags: [Artistas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do artista
 *     responses:
 *       200:
 *         description: Artista deletado
 *       404:
 *         description: Artista não encontrado
 */
router.delete("/artistas/:id", artistasController.deleteArtista);

/**
 * @swagger
 * /api/artistas/{id}:
 *   put:
 *     summary: Atualiza um artista
 *     tags: [Artistas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do artista
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Artista atualizado
 *       404:
 *         description: Artista não encontrado
 */
router.put("/artistas/:id", artistasController.updateArtista);

module.exports = router;