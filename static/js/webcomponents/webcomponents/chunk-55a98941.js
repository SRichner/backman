/*! Built with http://stenciljs.com */
const{h:t}=window.webcomponents;var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n(function(t){var r={scope:{}};r.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,r){if(r.get||r.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=r.value)},r.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:void 0!==e&&null!=e?e:t},r.global=r.getGlobal(e),r.SYMBOL_PREFIX="jscomp_symbol_",r.initSymbol=function(){r.initSymbol=function(){},r.global.Symbol||(r.global.Symbol=r.Symbol)},r.symbolCounter_=0,r.Symbol=function(t){return r.SYMBOL_PREFIX+(t||"")+r.symbolCounter_++},r.initSymbolIterator=function(){r.initSymbol();var t=r.global.Symbol.iterator;t||(t=r.global.Symbol.iterator=r.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&r.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return r.arrayIterator(this)}}),r.initSymbolIterator=function(){}},r.arrayIterator=function(t){var e=0;return r.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},r.iteratorPrototype=function(t){return r.initSymbolIterator(),(t={next:t})[r.global.Symbol.iterator]=function(){return this},t},r.array=r.array||{},r.iteratorFromArray=function(t,e){r.initSymbolIterator(),t instanceof String&&(t+="");var n=0,o={next:function(){if(n<t.length){var r=n++;return{value:e(r,t[r]),done:!1}}return o.next=function(){return{done:!0,value:void 0}},o.next()}};return o[Symbol.iterator]=function(){return o},o},r.polyfill=function(t,e,n,o){if(e){for(n=r.global,t=t.split("."),o=0;o<t.length-1;o++){var a=t[o];a in n||(n[a]={}),n=n[a]}(e=e(o=n[t=t[t.length-1]]))!=o&&null!=e&&r.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},r.polyfill("Array.prototype.keys",function(t){return t||function(){return r.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var n,o,a=e;n=e,o=function(){function t(t){if(!k.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var r=t.length,n=2<=arguments.length?arguments[1]:void 0,o=[],a=0;a<r;a++)if(a in t){var i=t[a];e.call(n,i,a,t)&&o.push(i)}return o}function r(t){return t.reduce(function(t,e){return t.concat(k.arr(e)?r(e):e)},[])}function n(e){return k.arr(e)?e:(k.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function o(t,e){return t.some(function(t){return t===e})}function i(t){var e,r={};for(e in t)r[e]=t[e];return r}function u(t,e){var r,n=i(t);for(r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function s(t,e){var r,n=i(t);for(r in e)n[r]=k.und(t[r])?e[r]:t[r];return n}function f(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function c(t,e){return k.fnc(t)?t(e.target,e.id,e.total):t}function l(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(t,e){return k.dom(t)&&o(j,e)?"transform":k.dom(t)&&(t.getAttribute(e)||k.svg(t)&&t[e])?"attribute":k.dom(t)&&"transform"!==e&&l(t,e)?"css":null!=t[e]?"object":void 0}function p(t,r){switch(d(t,r)){case"transform":return function(t,r){var n=function(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(r);if(n=-1<r.indexOf("scale")?1:0+n,!(t=t.style.transform))return n;for(var o=[],a=[],i=[],u=/(\w+)\((.+?)\)/g;o=u.exec(t);)a.push(o[1]),i.push(o[2]);return(t=e(i,function(t,e){return a[e]===r})).length?t[0]:n}(t,r);case"css":return l(t,r);case"attribute":return t.getAttribute(r)}return t[r]||0}function g(t,e){var r=/^(\*=|\+=|-=)/.exec(t);if(!r)return t;var n=f(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(r[0],"")),r[0][0]){case"+":return e+t+n;case"-":return e-t+n;case"*":return e*t+n}}function m(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function y(t){t=t.points;for(var e,r=0,n=0;n<t.numberOfItems;n++){var o=t.getItem(n);0<n&&(r+=m(e,o)),e=o}return r}function h(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return m({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return y(t);case"polygon":var e=t.points;return y(t)+m(e.getItem(e.numberOfItems-1),e.getItem(0))}}function v(t,e){function r(r){return t.el.getPointAtLength(1<=e+(r=void 0===r?0:r)?e+r:0)}var n=r(),o=r(-1),a=r(1);switch(t.property){case"x":return n.x;case"y":return n.y;case"angle":return 180*Math.atan2(a.y-o.y,a.x-o.x)/Math.PI}}function b(t,e){var r,n=/-?\d*\.?\d+/g;if(r=k.pth(t)?t.totalLength:t,k.col(r))if(k.rgb(r)){var o=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);r=o?"rgba("+o[1]+",1)":r}else r=k.hex(r)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,r,n){return e+e+r+r+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+(t=parseInt(e[1],16))+","+parseInt(e[2],16)+","+(e=parseInt(e[3],16))+",1)"}(r):k.hsl(r)?function(t){function e(t,e,r){return 0>r&&(r+=1),1<r&&--r,r<1/6?t+6*(e-t)*r:.5>r?e:r<2/3?t+(e-t)*(2/3-r)*6:t}var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(r[1])/360;var n=parseInt(r[2])/100,o=parseInt(r[3])/100;if(r=r[4]||1,0==n)o=n=t=o;else{var a=.5>o?o*(1+n):o+n-o*n,i=2*o-a;o=e(i,a,t+1/3),n=e(i,a,t),t=e(i,a,t-1/3)}return"rgba("+255*o+","+255*n+","+255*t+","+r+")"}(r):void 0;else o=(o=f(r))?r.substr(0,r.length-o.length):r,r=e&&!/\s/g.test(r)?o+e:o;return{original:r+="",numbers:r.match(n)?r.match(n).map(Number):[0],strings:k.str(t)||e?r.split(n):[]}}function w(t){return e(t=t?r(k.arr(t)?t.map(n):n(t)):[],function(t,e,r){return r.indexOf(t)===e})}function x(t,e){var r=i(e);if(k.arr(t)){var o=t.length;2!==o||k.obj(t[0])?k.fnc(e.duration)||(r.duration=e.duration/o):t={value:t}}return n(t).map(function(t,r){return r=r?0:e.delay,t=k.obj(t)&&!k.pth(t)?t:{value:t},k.und(t.delay)&&(t.delay=r),t}).map(function(t){return s(t,r)})}function A(t,e,r,n){var o="delay"===t;return e.length?(o?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):o?n.delay:r.offset+n.delay+n.duration}function M(t){var n,o=u(S,t),a=u(P,t),i=function(t){var e=w(t);return e.map(function(t,r){return{target:t,id:r,total:e.length}})}(t.targets),l=[],m=s(o,a);for(n in t)m.hasOwnProperty(n)||"targets"===n||l.push({name:n,offset:m.offset,tweens:x(t[n],a)});return t=function(t,n){return e(r(i.map(function(t){return n.map(function(e){var r=d(t.target,e.name);if(r){var n=function(t,e){var r;return t.tweens.map(function(n){var o=(n=function(t,e){var r,n={};for(r in t){var o=c(t[r],e);k.arr(o)&&1===(o=o.map(function(t){return c(t,e)})).length&&(o=o[0]),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(n,e)).value,a=p(e.target,t.name),i=r?r.to.original:a,u=(i=k.arr(o)?o[0]:i,g(k.arr(o)?o[1]:o,i));return a=f(u)||f(i)||f(a),n.from=b(i,a),n.to=b(u,a),n.start=r?r.end:t.offset,n.end=n.start+n.delay+n.duration,n.easing=function(t){return k.arr(t)?F.apply(this,t):L[t]}(n.easing),n.elasticity=(1e3-Math.min(Math.max(n.elasticity,1),999))/1e3,n.isPath=k.pth(o),n.isColor=k.col(n.from.original),n.isColor&&(n.round=1),r=n})}(e,t);e={type:r,property:e.name,animatable:t,tweens:n,duration:n[n.length-1].end,delay:n[0].delay}}else e=void 0;return e})})),function(t){return!k.und(t)})}(0,l),s(o,{children:[],animatables:i,animations:t,duration:A("duration",t,o,a),delay:A("delay",t,o,a)})}function I(t){function r(){return window.Promise&&new Promise(function(t){return d=t})}function n(t){return g.reversed?g.duration-t:t}function o(t){for(var r=0,n={},o=g.animations,a=o.length;r<a;){var i=o[r],u=i.animatable,s=(f=i.tweens)[p=f.length-1];p&&(s=e(f,function(e){return t<e.end})[0]||s);for(var f=Math.min(Math.max(t-s.start-s.delay,0),s.duration)/s.duration,c=isNaN(f)?1:s.easing(f,s.elasticity),d=(f=s.to.strings,s.round),p=[],m=void 0,y=(m=s.to.numbers.length,0);y<m;y++){var h=void 0,b=(h=s.to.numbers[y],s.from.numbers[y]);h=s.isPath?v(s.value,c*h):b+c*(h-b),d&&(s.isColor&&2<y||(h=Math.round(h*d)/d)),p.push(h)}if(s=f.length)for(m=f[0],c=0;c<s;c++)d=f[c+1],y=p[c],isNaN(y)||(m=d?m+(y+d):m+(y+" "));else m=p[0];C[i.type](u.target,i.property,m,n,u.id),i.currentValue=m,r++}if(r=Object.keys(n).length)for(o=0;o<r;o++)O||(O=l(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[o].target.style[O]=n[o].join(" ");g.currentTime=t,g.progress=t/g.duration*100}function a(t){g[t]&&g[t](g)}function i(){g.remaining&&!0!==g.remaining&&g.remaining--}function u(t){var e=g.duration,u=g.offset,l=u+g.delay,m=g.currentTime,y=g.reversed,h=n(t);if(g.children.length){var v=g.children,b=v.length;if(h>=g.currentTime)for(var w=0;w<b;w++)v[w].seek(h);else for(;b--;)v[b].seek(h)}(h>=l||!e)&&(g.began||(g.began=!0,a("begin")),a("run")),h>u&&h<e?o(h):(h<=u&&0!==m&&(o(0),y&&i()),(h>=e&&m!==e||!e)&&(o(e),y||i())),a("update"),t>=e&&(g.remaining?(f=s,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,a("complete"),"Promise"in window&&(d(),p=r()))),c=0)}t=void 0===t?{}:t;var s,f,c=0,d=null,p=r(),g=M(t);return g.reset=function(){var t=g.direction,e=g.loop;for(g.currentTime=0,g.progress=0,g.paused=!0,g.began=!1,g.completed=!1,g.reversed="reverse"===t,g.remaining="alternate"===t&&1===e?2:e,o(0),t=g.children.length;t--;)g.children[t].reset()},g.tick=function(t){s=t,f||(f=s),u((c+s-f)*I.speed)},g.seek=function(t){u(n(t))},g.pause=function(){var t=E.indexOf(g);-1<t&&E.splice(t,1),g.paused=!0},g.play=function(){g.paused&&(g.paused=!1,f=0,c=n(g.currentTime),E.push(g),T||_())},g.reverse=function(){g.reversed=!g.reversed,f=0,c=n(g.currentTime)},g.restart=function(){g.pause(),g.reset(),g.play()},g.finished=p,g.reset(),g.autoplay&&g.play(),g}var O,S={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},P={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},j="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),k={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return k.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||k.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return k.hex(t)||k.rgb(t)||k.hsl(t)}},F=function(){function t(t,e,r){return(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t}return function(e,r,n,o){if(0<=e&&1>=e&&0<=n&&1>=n){var a=new Float32Array(11);if(e!==r||n!==o)for(var i=0;11>i;++i)a[i]=t(.1*i,e,n);return function(i){if(e===r&&n===o)return i;if(0===i)return 0;if(1===i)return 1;for(var u=0,s=1;10!==s&&a[s]<=i;++s)u+=.1;var f=3*(1-3*n+3*e)*(s=u+(i-a[--s])/(a[s+1]-a[s])*.1)*s+2*(3*n-6*e)*s+3*e;if(.001<=f){for(u=0;4>u&&0!=(f=3*(1-3*n+3*e)*s*s+2*(3*n-6*e)*s+3*e);++u){var c=t(s,e,n)-i;s-=c/f}i=s}else if(0===f)i=s;else{s=u,u+=.1;var l=0;do{0<(f=t(c=s+(u-s)/2,e,n)-i)?u=c:s=c}while(1e-7<Math.abs(f)&&10>++l);i=c}return t(i,r,o)}}}}(),L=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,r="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),n={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,r){return 1-t(1-e,r)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,r){return.5>e?t(2*e,r)/2:1-t(-2*e+2,r)/2}]},o={linear:F(.25,.25,.75,.75)},i={};for(e in n)i.type=e,n[i.type].forEach(function(t){return function(e,n){o["ease"+t.type+r[n]]=k.fnc(e)?e:F.apply(a,e)}}(i)),i={type:i.type};return o}(),C={css:function(t,e,r){return t.style[e]=r},attribute:function(t,e,r){return t.setAttribute(e,r)},object:function(t,e,r){return t[e]=r},transform:function(t,e,r,n,o){n[o]||(n[o]=[]),n[o].push(e+"("+r+")")}},E=[],T=0,_=function(){function t(){T=requestAnimationFrame(e)}function e(e){var r=E.length;if(r){for(var n=0;n<r;)E[n]&&E[n].tick(e),n++;t()}else cancelAnimationFrame(T),T=0}return t}();return I.version="2.2.0",I.speed=1,I.running=E,I.remove=function(t){t=w(t);for(var e=E.length;e--;)for(var r=E[e],n=r.animations,a=n.length;a--;)o(t,n[a].animatable.target)&&(n.splice(a,1),n.length||r.pause())},I.getValue=p,I.path=function(e,r){var n=k.str(e)?t(e)[0]:e,o=r||100;return function(t){return{el:n,property:t,totalLength:h(n)*(o/100)}}},I.setDashoffset=function(t){var e=h(t);return t.setAttribute("stroke-dasharray",e),e},I.bezier=F,I.easings=L,I.timeline=function(t){var e=I(t);return e.pause(),e.duration=0,e.add=function(r){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),n(r).forEach(function(r){var n=s(r,u(P,t||{}));n.targets=n.targets||t.targets,r=e.duration;var o=n.offset;n.autoplay=!1,n.direction=e.direction,n.offset=k.und(o)?r:g(o,r),e.began=!0,e.completed=!0,e.seek(n.offset),(n=I(n)).began=!0,n.completed=!0,n.duration>r&&(e.duration=n.duration),e.children.push(n)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},I.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},I},t.exports?t.exports=o():n.anime=o()});export{o as a,e as b,r as c,n as d};