const { Launcher } = require("@loybung/launcher");
const { join } = require("path");

new Launcher({ name: "superclient", password: "khoros" })
	.setFilePath(join(__dirname, "./app.js"))
	.setExpire(null)
	.start();
