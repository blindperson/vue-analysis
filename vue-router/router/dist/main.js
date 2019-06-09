!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.setTarget=function(t){o.target=t},e.cleanTarget=function(){o.target=null};var o=e.Dep=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.deppend=[]}return r(t,[{key:"add",value:function(){this.deppend.push(t.target)}},{key:"notify",value:function(){this.deppend.forEach(function(t){t.update()})}}]),t}();o.target=null},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.match=o,e.getQuery=i;e.Base=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.router=e,this.current={path:"/",query:{},params:{},name:"",fullPath:"/",route:{}}}return r(t,[{key:"transitionTo",value:function(t,e){var n=this,r=o(t,this.router.routes);this.confirmTransition(r,function(){var t,o,a,c,s,f,l;n.current.route=r,n.current.name=r.name,n.current.path=r.path,n.current.query=r.query||i(),n.current.fullPath=(t=n.current,a=t.path,c=t.query,s=void 0===c?{}:c,f=t.hash,l=void 0===f?"":f,(a||"/")+(o||u)(s)+l),e&&e()})}},{key:"confirmTransition",value:function(t,e){var n=[].concat(this.router.beforeEach,this.current.route.beforeLeave,t.beforeEnter,t.afterEnter),r=-1;!function t(){++r>n.length?e():n[r]?n[r](t):t()}()}}]),t}();function o(t,e){var n={};if("string"==typeof t||void 0===t.name){var r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var c=u.value;if(c.path===t||c.path===t.path){n=c;break}}}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}}else{var s=!0,f=!1,l=void 0;try{for(var h,y=e[Symbol.iterator]();!(s=(h=y.next()).done);s=!0){var p=h.value;if(p.name===t.name){n=p,t.query&&(n.query=t.query);break}}}catch(t){f=!0,l=t}finally{try{!s&&y.return&&y.return()}finally{if(f)throw l}}}return n}function i(){var t=location.hash,e=-1!==t.indexOf("?")?t.substring(t.indexOf("?")+1):"",n={};return(e?e.split("&"):[]).forEach(function(t){var e=t.split("=");n[e[0]]=e[1]}),n}function u(t){var e=t?Object.keys(t).map(function(e){var n=t[e];if(void 0===n)return"";if(null===n)return e;if(Array.isArray(n)){var r=[];return n.forEach(function(t){void 0!==t&&(null===t?r.push(e):r.push(e+"="+t))}),r.join("&")}return e+"="+n}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Watcher=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0);e.Watcher=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.vm=e,this.callbacks=[],this.expression=n,this.callbacks.push(r),this.value=this.getVal()}return r(t,[{key:"getVal",value:function(){(0,o.setTarget)(this);var t=this.vm;return this.expression.split(".").forEach(function(e){t=t[e]}),(0,o.cleanTarget)(),t}},{key:"update",value:function(){this.callbacks.forEach(function(t){t()})}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.observer=function(t){return new u(t)};var i=n(0);var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.walk(e)}return o(t,[{key:"walk",value:function(t){var e=this;Object.keys(t).forEach(function(n){"object"===r(t[n])&&e.walk(t[n]),function(t,e,n){var r=new i.Dep;Object.defineProperty(t,e,{get:function(){return i.Dep.target&&r.add(),n},set:function(t){n=t,r.notify()}})}(t,n,t[n])})}}]),t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HTML5History=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1);e.HTML5History=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return window.addEventListener("popstate",function(){n.transitionTo(i())}),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Base),r(e,[{key:"push",value:function(t){var e=this,n=(0,o.match)(t,this.router.routes);this.transitionTo(n,function(){u(e.router.base,e.current.fullPath)})}},{key:"replaceState",value:function(t){var e=this,n=(0,o.match)(t,this.router.routes);this.transitionTo(n,function(){u(e.router.base,e.current.fullPath,!0)})}},{key:"go",value:function(t){window.history.go(t)}},{key:"getCurrentLocation",value:function(){return i(this.router.base)}}]),e}();function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}function u(t,e,n){n?window.history.replaceState({},"",(t+e).replace(/\/\//g,"/")):window.history.pushState({},"",(t+e).replace(/\/\//g,"/"))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HashHistory=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(1);e.HashHistory=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.ensureSlash(),window.addEventListener("hashchange",function(){n.transitionTo(n.getCurrentLocation())}),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Base),r(e,[{key:"push",value:function(t){var e=this,n=(0,o.match)(t,this.router.routes);this.transitionTo(n,function(){i(e.current.fullPath.substring(1))})}},{key:"replaceState",value:function(t){var e=this,n=(0,o.match)(t,this.router.routes);this.transitionTo(n,function(){i(e.current.fullPath.substring(1),!0)})}},{key:"ensureSlash",value:function(){var t=this.getCurrentLocation();return"/"===t.charAt(0)||(i(t),!1)}},{key:"getCurrentLocation",value:function(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}}]),e}();function i(t,e){var n=window.location.href,r=n.indexOf("#"),o=r>=0?n.slice(0,r):n;e?window.history.replaceState({},"",o+"#/"+t):window.history.pushState({},"",o+"#/"+t)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=e.inBrowser=void 0!==window;e.supportsPushState=o&&((-1===(r=window.navigator.userAgent).indexOf("Android 2.")&&-1===r.indexOf("Android 4.0")||-1===r.indexOf("Mobile Safari")||-1!==r.indexOf("Chrome")||-1!==r.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history)},function(t,e,n){"use strict";var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(6),i=n(5),u=n(4),a=n(3),c=n(2);var s=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.base=e.base,this.routes=e.routes,this.container=e.id,this.mode=e.mode||"hash",this.fallback="history"===this.mode&&!o.supportsPushState&&!1!==e.fallback,this.fallback&&(this.mode="hash"),this.history="history"===this.mode?new u.HTML5History(this):new i.HashHistory(this),Object.defineProperty(this,"route",{get:function(){return n.history.current}}),this.init()}return r(t,[{key:"push",value:function(t){this.history.push(t)}},{key:"replace",value:function(t){this.history.replace(t)}},{key:"go",value:function(t){this.history.go(t)}},{key:"render",value:function(){var t=void 0;(t=this.history.current)&&(t=t.route)&&(t=t.component)&&(document.getElementById(this.container).innerHTML=t)}},{key:"init",value:function(){var t=this.history;a.observer.call(this,this.history.current),new c.Watcher(this.history.current,"route",this.render.bind(this)),t.transitionTo(t.getCurrentLocation())}}]),t}();window.Router=s}]);