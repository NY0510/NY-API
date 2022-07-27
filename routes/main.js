const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.redirect("https://github.com/NY0510/NY-API", 301);
});

router.get("/docs", (req, res) => {
	res.redirect("https://ny64.gitbook.io/ny-api/", 301);
});

module.exports = router;
