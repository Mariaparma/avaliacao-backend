const express = require("express");
const router = express.Router();
const houseController = require("../controllers/artistasController.js");
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
 *     summary: Lista todas os artistas
 *     tags: [Artistas]
 *     responses:
 *       200:
 *         description: Lista de artistas
 */
router.get("/artistas", artistaController.getAllArtistas);

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
 *     responses:
 *       200:
 *         description: Artista encontrado
 *       404:
 *         description: Artista não encontrado
 */
router.get("/artistas/:id", artistaController.getArtista);

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
 *               founder:
 *                 type: string
 *     responses:
 *       201:
 *         description: Artista criado
 */
router.post("/artistas", artistaController.createArtista);

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
 *     responses:
 *       200:
 *         description: Artista deletado
 */
router.delete("/artistas/:id", artistaController.deleteArtista);

/**
 * @swagger
 * /api/artistas/{id}:
 *   put:
 *     summary: Atualiza um Artista
 *     tags: [Artistas]
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
 *               founder:
 *                 type: string
 *     responses:
 *       200:
 *         description: Artista atualizado
 */
router.put("/artistas/:id", artistaController.updateArtista);

module.exports = router;