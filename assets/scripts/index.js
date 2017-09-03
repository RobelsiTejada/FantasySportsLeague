'use strict'

const setAPIOrigin = require('./../../lib/set-api-origin.js')
const config = require('./config.js')
const userEvents = require('./events.js')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example')

// On document ready
$(() => {
  // $('.landing-page').hide()
  setAPIOrigin(location, config)
  userEvents.addHandlers()
})
