const express = require("express");
const asyncify = require("express-asyncify");

const app = asyncify(express());
const path = require("path");
const fs = require("fs");
const config = require(path.join(__dirname, "modules", "env.js"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = config.port || 3000;
const apiVersion = config.apiVersion;

app.use("/", require("./routes/main"));
fs.readdirSync(path.join(__dirname, "routes", "api", `v${apiVersion}`)).forEach(file => {
	if (file.endsWith(".js")) {
		try {
			const route = require(path.join(__dirname, "routes", "api", `v${apiVersion}`, file));
			app.use(`/${file.split(".")[0]}`, route);
			console.log(`Loaded Route: ./routes/api/v${apiVersion}/${file}`);
		} catch (err) {
			console.log(err);
		}
	}
});

app.listen(port, () => {
	console.log(`
Server is running on port ${port}!

http://localhost:${port}
http://127.0.0.1:${port}
	`);
});
