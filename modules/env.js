require("dotenv").config();

module.exports = {
	port: process.env.PORT,
	hostname: process.env.HOSTNAME,

	// message: {
	// 	error: {
	// 		failedToGetImage: { text: process.env.MESSAGE_ERROR_IMAGE_LOAD, code: process.env.CODE_ERROR_GET_DATA },
	// 		failToGetData: {text: process.env.MESSAGE_ERROR_IMAGE_LOAD, code: process.env.CODE_ERROR_GET_DATA },
	// 		unknownError: { text: process.env.MESSAGE_ERROR_UNKNOWN_ERROR, code: process.env.CODE_ERROR_UNKNOWN },
	// 	},
	// 	success: {
	// 		imageLoaded: { text: process.env.MESSAGE_SUCCESS_IMAGE_LOAD, code: process.env.CODE_SUCCESS_GET_DATA },
	// 	},
	// },
};
