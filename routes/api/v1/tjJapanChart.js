const express = require("express");
const router = express.Router();
const config = require("../../../modules/env");
const crcreateJson = require("../../../modules/json");

const cheerio = require("cheerio");
const request = require("request");

const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

const baseUrl = `https://www.tjmedia.com/tjsong/song_monthPopular.asp?strType=3&SYY=${year}&SMM=${month - 1}&SDD=01&EYY=${year}&EMM=${month}&EDD=01`;

router.get("/", (req, res) => {
	const start = new Date();

	request({ url: baseUrl }, (error, response, body) => {
		if (error) throw error;

		let $ = cheerio.load(body);

		let charatData = [];
		$("table")
			.find("tr")
			.map(function (i, element) {
				no = String($(element).find("td:nth-of-type(1)").text());
				songNumber = String($(element).find("td:nth-of-type(2)").text());
				title = String($(element).find("td:nth-of-type(3)").text());
				singer = String($(element).find("td:nth-of-type(4)").text());
				if (no != "" || songNumber != "" || title != "" || singer != "") charatData.push({ no: no, songNumber: songNumber, title: title, singer: singer });
			});
		const data = crcreateJson.success(
			(type = "tjJapanChart"),
			(startTime = start),
			(endTime = new Date()),
			(startDay = `${year}-${month - 1}-1`),
			(endDay = `${year}-${month}-1`),
			(jsonData = charatData)
		);
		res.json(data);
	});
});

module.exports = router;
