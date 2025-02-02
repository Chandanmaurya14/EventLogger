const fs = require("fs");
const os = require("os");

const EventEmitter = require("events");
const { clearScreenDown } = require("readline");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "./eventlog.txt";

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}${os.EOL}`;
  fs.appendFile(logFile, logMessage, (err) => {
    if (err) throw err;
  });
};

logger.on("message", logToFile);

setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;
  logger.log(`Current Mermory Usage: ${memoryUsage.toFixed(2)}`);
}, 3000);

logger.log("Application Started");
logger.log("Appliction event occurred");
