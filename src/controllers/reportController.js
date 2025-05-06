const { format } = require("@fast-csv/format");
const AlbumModel = require("../models/albunsModel.js");

const exportAlbumCSV = async (req, res) => {
    try {
        const albuns = await AlbumModel.getAlbuns();

        res.setHeader("Content-Disposition", "attachment; filename=albuns.csv");
        res.setHeader("Content-Type", "text/csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        albuns.forEach((album) => {
            csvStream.write({
                Id: album.id,
                Nome: album.name,
                Foto: album.photo,
                Artista: album.artista_name || "Sem Artista",
            });
        });

        csvStream.end();
    } catch (error) {
        console.error("Erro ao gerar o CSV:", error);
        res.status(500).json({ message: "Erro ao gerar o CSV" });
    }
};

module.exports = { exportAlbumCSV };