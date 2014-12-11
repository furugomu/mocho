mocho = document.getElementById('mocho-face')
container = document.getElementById('container')

zoom = ->
  scale = container.offsetWidth / mocho.offsetWidth
  height = mocho.offsetHeight
  console.log 'height', mocho.offsetHeight, height
  mocho.style.transform = "scale(#{scale}, #{scale}) translateY(-50%)"

zoom()

window.addEventListener 'resize', ->
  zoom()
, false
