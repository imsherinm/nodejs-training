var OTPGen = require('otpgen');

OTPGen.getOTP(6, function(otp) {
	console.log(JSON.stringify(otp));
});