'use strict'

var split = require('split')
var through = require('through')
var PassThrough = require('stream').PassThrough
var logfmt = require('logfmt')

module.exports = function lgr (options) {
  options = options || {}
  var streamParser = new PassThrough()

  var handleStream = through(function (line) {
    if (line !== '') {
      if (isHerokuRouterLog(line)) {
        this.queue(parseHerokuRouterLog(line))
      }
    }
  })

  streamParser.on('pipe', function (source) {
    this.transformStream = source.pipe(split()).pipe(handleStream)
  })

  streamParser.pipe = function (dest, options) {
    return this.transformStream.pipe(dest, options)
  }

//  return logStream.pipe(logfmt.streamParser())
//

  return streamParser
}

function isHerokuRouterLog(log) {
  return /heroku\[router\]/.test(log)
}

function parseHerokuRouterLog(log) {
  var tokens = log.split(' heroku[router]: ')
  var parsedLog = logfmt.parse(tokens[1])
  parsedLog.time = tokens[0]
  parsedLog.heroku = true

  return parsedLog
}
