const path = require("path");
const config = require("./env");

module.exports.error = (type, startTime, endTime) => {
	switch (type) {
		case "failedToGetImage":
			return { errorMessage: config.message.error.failedToGetImage.text, code: Number(config.message.error.failedToGetImage.code), time: endTime - startTime };
			break;
	}
};

module.exports.success = (type, startTime, endTime, ...args) => {
	switch (type) {
		case "imageLoaded":
			return {
				successMessage: config.message.success.imageLoaded.text,
				code: Number(config.message.success.imageLoaded.code),
				time: endTime - startTime,
				url: args[0],
				categorie: args[2],
				imageType: args[1],
			};
			break;
	}
};