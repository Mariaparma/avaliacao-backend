const express = require("express");
const router = express.Router();
const albumController = require("../controllers/albunsController.js");
const upload = require("../config/upload.js");
const apiKeyMiddleware = require("../config/apiKey.js");


router.use(apiKeyMiddleware);

/**
 * @swagger
 * tags:
 *   name: Albuns
 *   description: Gerenciamento de albuns
 */

/**
 * @swagger
 * /api/albuns:
 *   get:
 *     summary: Lista todos os albuns
 *     tags: [Albuns]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de albuns
 */
router.get("/albuns", albumController.getAllAlbuns);

/**
 * @swagger
 * /api/albuns/{id}:
 *   get:
 *     summary: Busca album por ID
 *     tags: [Albuns]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Album encontrado
 *       404:
 *         description: Album não encontrado
 */
router.get("/albuns/:id", albumController.getAlbum);

/**
 * @swagger
 * /api/albuns:
 *   post:
 *     summary: Cria um novo album
 *     tags: [Albuns]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               artista_id:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Album criado
 */
router.post("/albuns", upload.single("photo"), albumController.createAlbum);

/**
 * @swagger
 * /api/albuns/{id}:
 *   delete:
 *     summary: Deleta um album
 *     tags: [Albuns]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Album deletado
 */
router.delete("/albuns/:id", albumController.deleteAlbum);

/**
 * @swagger
 * /api/albuns/{id}:
 *   put:
 *     summary: Atualiza um album
 *     tags: [Albuns]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               artista_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Album atualizado
 */
router.put("/albuns/:id", albumController.updateAlbum);

module.exports = router;