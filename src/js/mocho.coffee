$ = require 'jquery'

mocho = $('#mocho-face')
container = $('#container')

zoom = ->
  scale = container.width() / mocho.width()
  mocho.css 'transform', "scale(#{scale}, #{scale}) translateY(-50%)"

zoom()

window.addEventListener 'resize', ->
  zoom()
, false
