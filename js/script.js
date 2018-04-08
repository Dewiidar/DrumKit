(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function keyTransition(e) {
    var keyCode = e.keyCode;
    var element = $(`div[data-key='${keyCode}']`)[0];
    var audio = $(`audio[data-key='${keyCode}']`)[0];

    if (!audio) {
        return;
    }

    audio.currentTime = 0;
    audio.play();

    element.classList.add('playing');

    element.addEventListener("transitionend", function (e) {
        element.classList.remove('playing');
    });
}

window.addEventListener("keypress", 
    function(e) {
        keyTransition(e);
    }
);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1BhcnRpdGlvbi9XZWIgRGV2ZWxvcG1lbnQvUHJvamVjdHMvRHJ1bSBLaXQgUHJvamVjdCAtIEpTIHByYWN0aWNlL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Wb2x1bWVzL1BhcnRpdGlvbi9XZWIgRGV2ZWxvcG1lbnQvUHJvamVjdHMvRHJ1bSBLaXQgUHJvamVjdCAtIEpTIHByYWN0aWNlL2NvbXBvbmVudHMvc2NyaXB0cy9mYWtlX2M5YjM1NmUwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24ga2V5VHJhbnNpdGlvbihlKSB7XG4gICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgdmFyIGVsZW1lbnQgPSAkKGBkaXZbZGF0YS1rZXk9JyR7a2V5Q29kZX0nXWApWzBdO1xuICAgIHZhciBhdWRpbyA9ICQoYGF1ZGlvW2RhdGEta2V5PScke2tleUNvZGV9J11gKVswXTtcblxuICAgIGlmICghYXVkaW8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcbiAgICBhdWRpby5wbGF5KCk7XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgXG4gICAgZnVuY3Rpb24oZSkge1xuICAgICAgICBrZXlUcmFuc2l0aW9uKGUpO1xuICAgIH1cbik7XG4iXX0=
