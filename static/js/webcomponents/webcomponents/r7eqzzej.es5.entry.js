/*! Built with http://stenciljs.com */
webcomponents.loadBundle("r7eqzzej",["exports","./chunk-604eb996.js"],function(e,t){var n=window.webcomponents.h,o=function(){function e(){}return e.prototype.doesSlotContainHTML=function(){return t.getAllSlotChildNodes(this.el).some(function(e){return 1===e.nodeType})},e.prototype.getComponentClassNames=function(){return{component:!0,ellipsis:!this.doesSlotContainHTML()}},e.prototype.render=function(){return n("div",{class:this.getComponentClassNames()},n("div",{class:"slot"},n("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"sdx-text-truncate"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%}.component.ellipsis .slot{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"},enumerable:!0,configurable:!0}),e}();e.SdxTextTruncate=o,Object.defineProperty(e,"__esModule",{value:!0})});