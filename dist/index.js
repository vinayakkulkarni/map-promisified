(function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports["mapPromisify"]=n():e["mapPromisify"]=n()})(window,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);var o=[{name:"moveend",check:function(e,n){return n.center&&e.isMoving()}},{name:"zoomend",check:function(e,n){return void 0!==n.zoom&&null!==n.zoom&&e.isZooming()}},{name:"rotateend",check:function(e,n){return void 0!==n.bearing&&null!==n.bearing&&e.isRotating()}},{name:"pitchend",check:function(e,n){return void 0!==n.pitch&&null!==n.bearing&&e.isMoving()}}],r=function(e){return{center:e.getCenter(),zoom:e.getZoom(),bearing:e.getBearing(),pitch:e.getPitch()}},i={events:o,getter:r},u={events:[{name:"moveend",check:function(e){return e.isMoving()}}],getter:function(e){return{center:e.getCenter()}}},c={events:[{name:"zoomend",check:function(e){return e.isZooming()}}],getter:function(e){return{zoom:e.getZoom()}}},f={events:[{name:"rotateend",check:function(e){return e.isRotating()}}],getter:function(e){return{bearing:e.getBearing()}}},a={setCenter:u,panBy:u,panTo:u,setZoom:c,zoomTo:c,zoomIn:c,zoomOut:c,setBearing:f,rotateTo:f,resetNorth:f,snapToNorth:f,setPitch:{events:[{name:"pitchend",check:function(e){return!0}}],getter:function(e){return{pitch:e.getPitch()}}},fitBounds:{events:[{name:"zoomend",check:function(e){return e.isZooming()}},{name:"moveend",check:function(e){return e.isMoving()}},{name:"rotateend",check:function(e){return e.isRotating()}}],getter:function(e){return{zoom:e.getZoom(),bearing:e.getBearing(),pitch:e.getPitch(),center:e.getCenter()}}},fitScreenCoordinates:{events:[{name:"zoomend",check:function(e,n){return e.isZooming()}},{name:"rotateend",check:function(e,n){return n.bearing&&e.isRotating()}}],getter:function(e){return{zoom:e.getZoom(),center:e.getCenter(),bearing:e.getBearing(),pitch:e.getPitch()}}},jumpTo:i,easeTo:i,flyTo:i};function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){g(e,n,t[n])})}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return"".concat(e,"-").concat((""+Math.random()).split(".")[1])}function d(e,n,t,o){var r=function r(i){i.type===n&&i.eventId===t&&(e.off(n,r),o(i))};return r}function p(e,n){var t=e[n],o=t.length;return function(){for(var r=[],i={eventId:s(n)},u=a[n].events.map(function(n,t){return{event:n,func:new Promise(function(o,u){r[t]={event:n,func:d(e,n.name,i.eventId,o)},e.on(n.name,r[t].func)})}}),c=[],f=0;f<o;f++)f===o-1?c.push(m({},i,(f<0||arguments.length<=f?void 0:arguments[f])||{})):c.push((f<0||arguments.length<=f?void 0:arguments[f])||null);var g=[],p=(arguments.length<=0?void 0:arguments[0])||{};try{t.apply(e,c),"fitBounds"===n&&(p={}),"fitScreenCoordinates"===n&&(p={bearing:null},p.bearing=null,"number"===typeof(arguments.length<=2?void 0:arguments[2])&&(p.bearing=arguments.length<=2?void 0:arguments[2]),(arguments.length<=3?void 0:arguments[3])&&"object"===l(arguments.length<=3?void 0:arguments[3])&&(p=m({},p,arguments.length<=3?void 0:arguments[3]))),g=u.map(function(n){var t=n.event,o=n.func;return t.check(e,p)?o:(e.off(t.name,o),Promise.resolve())})}catch(v){throw r.forEach(function(n){var t=n.event,o=n.func;e.off(t.name,o)}),v}return Promise.all(g).then(function(){return a[n].getter(e)})}}var v=p,h=function(e){var n=Object.keys(a),t={};return n.forEach(function(o){-1!==n.indexOf(o)&&(t[o]=v(e,o))}),t};function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n?v(e,n):h(e)}t.d(n,"default",function(){return b})}])["default"]});