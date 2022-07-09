const express = require("express");
const app = express();
const path = require("path");
const config = require(path.join(__dirname, "modules", "env.js"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = config.port || 3000;

const main = require("./routes/main");
app.use("/", main);

const nsfw = require("./routes/api/v1/nsfw");
app.use("/nsfw", nsfw);

const tjJapanChart = require("./routes/api/v1/tjJapanChart");
app.use("/tjJapanChart", tjJapanChart);

app.listen(port, () => {
	console.log(`Server is running on port ${port}!\n\nhttp://localhost:${port}\nhttp://127.0.0.1:${port}`);
});
