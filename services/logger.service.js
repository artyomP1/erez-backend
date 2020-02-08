const fs = require('fs')

const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

//define the time format
function timeFormatFn() {
    let now = new Date();
    return now.toUTCString();
}

function doLog(message, level='DEBUG') {
    const line = `${level} - ${message}` 
    const content = fs.readFileSync('./logs/log.log')
    fs.writeFileSync('./logs/log.log',content + '\n' + line)
    console.log(line);
}

module.exports = {
    debug(message, meta = ""){
        doLog(message,"DEBUG")
    },
    info(message, meta = ""){
        doLog(message,"INFO")
    },
    warn(message, meta = ""){
        doLog(message,"WARN")
    },
    error(message, meta = ""){
        doLog(message,"ERROR")
    }
}