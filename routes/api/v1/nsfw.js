const express = require("express");
const router = express.Router();
const path = require("path");
const config = require("../../../modules/env");
const crcreateJson = require("../../../modules/json");

const request = require("request");
const crypto = require("crypto");
const fs = require("fs");

router.get("/", (req, res) => {
	const start = new Date();
	const categorieList = ["waifu", "neko", "trap", "blowjob"];
	const categorie = categorieList[Math.floor(Math.random() * categorieList.length)];

	request({ url: `https://api.waifu.pics/nsfw/${categorie}`, json: true }, (error, response, body) => {
		const fileUrl = body.url;

		if (error) {
			const data = crcreateJson.error((type = "failedToGetImage"), (startTime = start), (endTime = new Date()));
			res.json(data);
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
		// const fileExt = body.url.split(".").pop();
		// const fileName = body.url.split("/").pop().replace(`.${fileExt}`, "");
		// const hashedName = crypto.createHash("md5").update(fileName).digest("hex");
		// const filePath = path.join(__dirname, "../../../", "data", "image", `${hashedName}.${fileExt}`);

		// console.log(body.url);
		// const writeStream = fs.createWriteStream(filePath);
		// request.get(body.url).pipe(writeStream);
		// writeStream.on("finish", () => {
		// 	res.sendFile(filePath);
		// });
	});
});

module.exports = router;
