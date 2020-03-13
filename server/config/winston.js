import { createLogger } from 'winston'
import WinstonDailyRotateFile from 'winston-daily-rotate-file'
import path from 'path'

const datePattern = `YYYY-MM-DD`
const errorLogTransport = new WinstonDailyRotateFile({
  level: 'error',
  datePattern,
  filename: path.join(__dirname, '../winstonLogs/errorLogs/log'),
  maxFiles: '30d'
})
const infoLogTransport = new WinstonDailyRotateFile({
  level: 'info',
  datePattern,
  filename: path.join(__dirname, '../winstonLogs/infoLogs/log'),
  maxFiles: '30d'
})
const warnLogTransport = new WinstonDailyRotateFile({
  level: 'warn',
  datePattern,
  filename: path.join(__dirname, '../winstonLogs/warnLogs/log'),
  maxFiles: '30d'
})
const debugLogTransport = new WinstonDailyRotateFile({
  level: 'debug',
  datePattern,
  filename: path.join(__dirname, '../winstonLogs/debugLogs/log'),
  maxFiles: '30d'
})
export const LoggerJSON = {
  error: createLogger({ transports: [errorLogTransport] }),
  info: createLogger({ transports: [infoLogTransport] }),
  warn: createLogger({ transports: [warnLogTransport] }),
  debug: createLogger({ transports: [debugLogTransport] })
}
export const Logger = {
  error: (msg, ...other) => LoggerJSON.error.log('error', msg, ...other),
  info: (msg, ...other) => LoggerJSON.info.log('info', msg, ...other),
  warn: (msg, ...other) => LoggerJSON.warn.log('warn', msg, ...other),
  debug: (msg, ...other) => LoggerJSON.debug.log('debug', msg, ...other)
}
