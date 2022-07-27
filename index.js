const express = require("express");
const asyncify = require("express-asyncify");

const app = asyncify(express());
const path = require("path");
const config = require(path.join(__dirname, "modules", "env.js"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = config.port || 3000;

app.use("/", require("./routes/main"));
app.use("/nsfw", require("./routes/api/v1/nsfw"));
app.use("/tjChart", require("./routes/api/v1/tjChart"));

app.listen(port, () => {
	console.log(`Server is running on port ${port}!\n\nhttp://localhost:${port}\nhttp://127.0.0.1:${port}`);
});
