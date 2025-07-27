const express = require("express");
const { handleGenerateNewShortURL, handleGetAnalytics,handleDelete } = require("../controllers/url");
const router = express.Router();

// Route to create a short URL
router.post("/", handleGenerateNewShortURL);



router.get("/analytics/:shortId",handleGetAnalytics);

router.post("/delete/:shortId",handleDelete);


module.exports = router;
