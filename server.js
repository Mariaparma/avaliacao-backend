require("dotenv").config();
const express = require("express");
const cors = require("cors");
const albumRoutes = require("./src/routes/albunsRoutes.js");
const artistaRoutes = require("./src/routes/artistasRoutes.js");
const reportRoutes = require("./src/routes/reportRoutes.js");
const path = require("path");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Avaliação Backend🎤",
            version: "1.0.0",
            description: "Documentação da API",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
            },
        ],
    },
    apis: ["./src/routes/*.js"], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use("/api", albumRoutes);
app.use("/api", artistaRoutes);
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📄 Documentação disponível em http://localhost:${PORT}/api-docs`);
});