
var args = process.argv.slice(2);

var mode = process.argv[2];

var main = null;
if (mode == 'db') {
	main = require("./src/db/main");
} else if (mode == 'www') {
	main = require("./src/www/main");
} else {
	console.log('Invalid parameter ' + mode);
}

if (main != null) main.start();
