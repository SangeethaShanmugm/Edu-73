const os = require("os");
console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total memory", os.totalmem() / 1024 / 1024 / 1024);
console.log("User info", os.userInfo());
console.log("Platform", os.platform());
console.log(`Processor, ${os.cpus().length} Core`);
console.log(os.uptime());
console.log(os.arch());

//1024 bytes -> 1kb -> 1024kb ->  1mb -> 1024mb -> 1gb
