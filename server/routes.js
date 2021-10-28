module.exports = (db) => {
  const express = require("express");
  const router = express.Router();

  router.get("/", async (req, res) => {
    const artwalks = await db.getArtwalks();
    res.json(artwalks);
  });

  router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const artwalk = await db.getArtwalk(id);
    res.json(artwalk);
  });
  
  return router;
};