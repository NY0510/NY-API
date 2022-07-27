module.exports.error = (type, startTime, endTime, ...args) => {
	switch (type) {
		case "nsfw":
			return { message: "FAIL_TO_GET_IMAGE", code: "Error", time: endTime - startTime };
			break;
		case "tjChart":
			return { message: "FAIL_TO_GET_DATA", code: "Error", time: endTime - startTime, message: args[0] };
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
		case "tjChart":
			return {
				message: "DATA_LOADED_SUCCESSFULLY",
				code: "Success",
				time: endTime - startTime,
				startDay: args[0],
				endDay: args[1],
				country: args[2],
				data: args[3],
			};
			break;
	}
};
