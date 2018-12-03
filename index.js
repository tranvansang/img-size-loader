module.exports = function (content) { return 'module.exports = ' + JSON.stringify(require('image-size')(Buffer.from(content))) }
module.exports.raw = true
