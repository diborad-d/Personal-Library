const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// api routes

router.subscribe("api", apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public.index.html"));
});
module.exports = router;
