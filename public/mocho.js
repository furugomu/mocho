(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require('./mocho');



},{"./mocho":2}],2:[function(require,module,exports){
var container, mocho, zoom;

mocho = document.getElementById('mocho-face');

container = document.getElementById('container');

zoom = function() {
  var height, scale;
  scale = container.offsetWidth / mocho.offsetWidth;
  height = mocho.offsetHeight;
  console.log('height', mocho.offsetHeight, height);
  return mocho.style.transform = "scale(" + scale + ", " + scale + ") translateY(-50%)";
};

zoom();

window.addEventListener('resize', function() {
  return zoom();
}, false);



},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9uc3VnaW1vdG8vaG9nZS9tb2Noby9zcmMvanMvaW5kZXguY29mZmVlIiwiL2hvbWUvbnN1Z2ltb3RvL2hvZ2UvbW9jaG8vc3JjL2pzL21vY2hvLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLE9BQUEsQ0FBUSxTQUFSLENBQUEsQ0FBQTs7Ozs7QUNBQSxJQUFBLHNCQUFBOztBQUFBLEtBQUEsR0FBUSxRQUFRLENBQUMsY0FBVCxDQUF3QixZQUF4QixDQUFSLENBQUE7O0FBQUEsU0FDQSxHQUFZLFFBQVEsQ0FBQyxjQUFULENBQXdCLFdBQXhCLENBRFosQ0FBQTs7QUFBQSxJQUdBLEdBQU8sU0FBQSxHQUFBO0FBQ0wsTUFBQSxhQUFBO0FBQUEsRUFBQSxLQUFBLEdBQVEsU0FBUyxDQUFDLFdBQVYsR0FBd0IsS0FBSyxDQUFDLFdBQXRDLENBQUE7QUFBQSxFQUNBLE1BQUEsR0FBUyxLQUFLLENBQUMsWUFEZixDQUFBO0FBQUEsRUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFBc0IsS0FBSyxDQUFDLFlBQTVCLEVBQTBDLE1BQTFDLENBRkEsQ0FBQTtTQUdBLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBWixHQUF5QixRQUFBLEdBQVEsS0FBUixHQUFjLElBQWQsR0FBa0IsS0FBbEIsR0FBd0IscUJBSjVDO0FBQUEsQ0FIUCxDQUFBOztBQUFBLElBU0EsQ0FBQSxDQVRBLENBQUE7O0FBQUEsTUFXTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFNBQUEsR0FBQTtTQUNoQyxJQUFBLENBQUEsRUFEZ0M7QUFBQSxDQUFsQyxFQUVFLEtBRkYsQ0FYQSxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUgJy4vbW9jaG8nXG4iLCJtb2NobyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2Noby1mYWNlJylcbmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKVxuXG56b29tID0gLT5cbiAgc2NhbGUgPSBjb250YWluZXIub2Zmc2V0V2lkdGggLyBtb2Noby5vZmZzZXRXaWR0aFxuICBoZWlnaHQgPSBtb2Noby5vZmZzZXRIZWlnaHRcbiAgY29uc29sZS5sb2cgJ2hlaWdodCcsIG1vY2hvLm9mZnNldEhlaWdodCwgaGVpZ2h0XG4gIG1vY2hvLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoI3tzY2FsZX0sICN7c2NhbGV9KSB0cmFuc2xhdGVZKC01MCUpXCJcblxuem9vbSgpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyICdyZXNpemUnLCAtPlxuICB6b29tKClcbiwgZmFsc2VcbiJdfQ==
