const express = require("express");
const router = express.Router();
const path = require("path");
const config = require("../../../modules/env");
const crcreateJson = require("../../../modules/json");

const request = require("request");
const crypto = require("crypto");
const fs = require("fs");

router.get("/", (req, res) => {
	const query = req.query;
	const start = new Date();
	const categorieList = ["waifu", "neko", "trap", "blowjob"];
	let categorie;

	if (categorieList.includes(query.categorie)) {
		categorie = query.categorie;
	} else {
		categorie = categorieList[Math.floor(Math.random() * categorieList.length)];
	}

	request({ url: `https://api.waifu.pics/nsfw/${categorie}`, json: true }, (error, response, body) => {
		const fileUrl = body.url;

		if (error) {
			const data = crcreateJson.error((type = "failedToGetImage"), (startTime = start), (endTime = new Date()));
			res.json(data);
			console.log(`Error: 이미지 불러오는중 오류 발생 | ${__filename} - ${error}`);
		} else {
			const data = crcreateJson.success(
				(type = "imageLoaded"),
				(startTime = start),
				(endTime = new Date()),
				(imageurl = fileUrl),
				(imageType = fileUrl.split(".").pop()),
				(imageCategorie = categorie)
			);
			res.json(data);
		}
	});
});

module.exports = router;
