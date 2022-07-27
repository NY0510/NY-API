const express = require("express");
const router = express.Router();
const createJson = require("../../../modules/json");

const cheerio = require("cheerio");
const request = require("request");

const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

router.get("/", (req, res) => {
	const start = new Date();
	let country = req.query.country;
	let type;

	if (country === undefined) {
		return res.status(400).json(createJson.error((type = "tjChart"), (startTime = start), (endTime = new Date()), (message = "NO_COUNTRY_PARAMETER")));
	}
	if (country != "kr" && country != "jp") {
		return res.status(400).json(createJson.error((type = "tjChart"), (startTime = start), (endTime = new Date()), (message = "INVALID_COUNTRY_PARAMETER")));
	}

	if (country === "kr") type = "1";
	if (country === "jp") type = "3";

	const baseUrl = `https://www.tjmedia.com/tjsong/song_monthPopular.asp?strType=${type}&SYY=${year}&SMM=${month - 1}&SDD=01&EYY=${year}&EMM=${month}&EDD=01`;

	request({ url: baseUrl }, (error, response, body) => {
		if (error) {
			const data = createJson.error("tjChart", start, new Date());
			res.status(500).json(data);
		}

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
		const data = createJson.success(
			(type = "tjChart"),
			(startTime = start),
			(endTime = new Date()),
			(startDay = `${year}-${month - 1}-1`),
			(endDay = `${year}-${month}-1`),
			(country = country),
			(jsonData = charatData)
		);
		res.json(data);
	});
});

module.exports = router;
