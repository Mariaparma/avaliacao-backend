const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController.js");

router.get("/export/csv", reportController.exportAlbumCSV);

module.exports = router;