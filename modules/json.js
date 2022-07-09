const path = require("path");
const config = require("./env");

module.exports.error = (type, startTime, endTime) => {
	switch (type) {
		case "nsfw":
			return { message: "FAIL_TO_GET_IMAGE", code: "Error", time: endTime - startTime };
			break;
	}
};

module.exports.success = (type, startTime, endTime, ...args) => {
	switch (type) {
		case "nsfw":
			return {
				message: "IMAGE_LOADED_SUCCESSFULLY",
				code: "Success",
				time: endTime - startTime,
				url: args[0],
				categorie: args[2],
				imageType: args[1],
			};
			break;
		case "tjJapanChart":
			return {
				message: "DATA_LOADED_SUCCESSFULLY",
				code: "Success",
				time: endTime - startTime,
				startDay: args[0],
				endDay: args[1],
				data: args[2],
			};
			break;
	}
};
