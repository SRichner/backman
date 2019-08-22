/*! Built with http://stenciljs.com */
webcomponents.loadBundle("chunk-a6d5c435.js",["exports"],function(e){window;var t=function(e){var t,r=("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()).Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}(),r=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}};function n(e,r,i){var u;if("function"==typeof r&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof r&&void 0===i&&(i=r,r=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(n)(e,r)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var s=e,f=r,c=[],a=c,d=!1;function l(){a===c&&(a=c.slice())}function p(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function b(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return l(),a.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,l();var r=a.indexOf(e);a.splice(r,1)}}}function h(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,f=s(f,e)}finally{d=!1}for(var t=c=a,r=0;r<t.length;r++)(0,t[r])();return e}return h({type:o.INIT}),(u={dispatch:h,subscribe:b,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,h({type:o.REPLACE})}})[t]=function(){var e,r=b;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function t(){e.next&&e.next(p())}return t(),{unsubscribe:r(t)}}})[t]=function(){return this},e},u}e.createAndInstallStore=function(e,t,r){var o=e.el.__store;return o||(o=e.el.__store=n(t,r)),o},e.mapStateToProps=function(e,t,r){if(!t)return function(){};var o=function(){var o=t.getState();r.forEach(function(t){e.hasOwnProperty(t)&&o.hasOwnProperty(t)&&(e[t]=o[t])})};return o(),t.subscribe(o)},e.getStore=function(e){var t=e.el.__store;if(t)return t;for(var r=e.el;!t;){var o=r.getRootNode&&r.getRootNode().host;if(!(r=r.parentElement||o))break;if(r.__store){t=r.__store;break}}return t}});