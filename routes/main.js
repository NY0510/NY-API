const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.redirect("https://github.com/NY0510/NY-API", 301);
});

module.exports = router;
