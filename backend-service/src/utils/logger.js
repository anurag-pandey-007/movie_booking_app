const winston = require('winston');
const {transports,format} = winston;

const logger = winston.createLogger({
    transports: [
      new transports.File({
        level: 'info',
        filename: './Logs/information',
        format: format.combine(format.json(), format.timestamp({format: 'DD-MM-YYYY HH:mm:ss'})),
      }),
      new transports.File({
        level: 'error',
        filename: './Logs/error',
        format: format.combine(format.json(), format.timestamp({format: 'DD-MM-YYYY HH:mm:ss'})),
      })
    ]
  });

module.exports = logger;