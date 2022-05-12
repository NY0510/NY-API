require("dotenv").config();

module.exports = {
	port: process.env.PORT,
	hostname: process.env.HOSTNAME,

	message: {
		error: {
			failedToGetImage: { text: process.env.MESSAGE_ERROR_FAILED_TO_GET_IMAGE_TEXT, code: process.env.MESSAGE_ERROR_FAILED_TO_GET_IMAGE_CODE },
			unknownError: { text: process.env.MESSAGE_ERROR_UNKNOWN_ERROR_TEXT, code: process.env.MESSAGE_ERROR_UNKNOWN_ERROR_CODE },
		},
		success: {
			imageLoaded: { text: process.env.MESSAGE_SUCCESS_IMAGE_LOADED_TEXT, code: process.env.MESSAGE_SUCCESS_IMAGE_LOADED_CODE },
		},
	},
};
