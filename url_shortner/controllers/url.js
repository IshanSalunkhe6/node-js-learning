const { nanoid } = require('nanoid'); // make sure you have this at the top
const URL = require('../models/url'); // adjust path as per your project

// Controller to handle new short URL generation
const handleGenerateNewShortURL = async (req, res) => {
  const body = req.body;

  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortID = nanoid(8);

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render("home", {
    id: shortID,
    protocol: req.protocol,
    host: req.get("host"),
  });
};




async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;

  const result = await URL.findOne({ shortId });

  if (!result) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

  

async function handleDelete(req, res) {
    const shortId = req.params.shortId;

  await URL.deleteOne({ shortId });

  return res.redirect("/");
};

module.exports={
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleDelete
}