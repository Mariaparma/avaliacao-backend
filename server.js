require ("dotenv").config();
const express = require("express");
const cors=require("cors");
const albunsRoutes = require ("./src/routes/albunsRoutes.js");
const artistasRoutes = require ("./src/routes/artistasRoutes.js");

const app = express ();
app.use(cors());
app.use (express.json ());

app.use ("/api/albuns", albunsRoutes);
app.use ("/api/artistas", artistasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
