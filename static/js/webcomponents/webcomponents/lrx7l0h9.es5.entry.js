/*! Built with http://stenciljs.com */
webcomponents.loadBundle("lrx7l0h9",["exports"],function(e){var t=window.webcomponents.h,o=function(){function e(){this.open=!1}return e.prototype.activeItemChanged=function(){this.decideCollapseHeaderDisplay(),this.decideCollapseBodyDisplay()},e.prototype.componentWillLoad=function(){this.setChildElementsReferences(),this.decideCollapseHeaderDisplay()},e.prototype.componentDidLoad=function(){this.decideCollapseBodyDisplay()},e.prototype.setChildElementsReferences=function(){this.itemHeaderEl=this.el.querySelector("sdx-accordion-item-header"),this.itemBodyEl=this.el.querySelector("sdx-accordion-item-body")},e.prototype.decideCollapseHeaderDisplay=function(){this.itemHeaderEl&&this.itemHeaderEl.setAttribute("expand",this.open.toString())},e.prototype.decideCollapseBodyDisplay=function(){this.itemBodyEl&&this.itemBodyEl.toggle(this.open)},e.prototype.render=function(){return t("slot",null)},Object.defineProperty(e,"is",{get:function(){return"sdx-accordion-item"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0},open:{type:Boolean,attr:"open",watchCallbacks:["activeItemChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host{position:relative;display:block;border:1px solid #d6d6d6;border-bottom:0}:host p{padding:13px 13px 14px 19px}:host([arrow-position=center]){padding:0}:host(.margin-bottom-2){margin-bottom:16px}:host(.margin-0){margin:0}"},enumerable:!0,configurable:!0}),e}();e.SdxAccordionItem=o,Object.defineProperty(e,"__esModule",{value:!0})});