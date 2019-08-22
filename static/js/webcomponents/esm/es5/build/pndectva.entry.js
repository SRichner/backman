/*! Built with http://stenciljs.com */
import{h}from"../webcomponents.core.js";import{b as MenuFlyoutActionTypes}from"./chunk-bc34555f.js";import{b as mapStateToProps,c as getStore}from"./chunk-6a8011c5.js";var MenuFlyoutList=function(){function t(){}return t.prototype.componentWillLoad=function(){this.store=getStore(this),this.unsubscribe=mapStateToProps(this,this.store,[]),this.dispatch({type:MenuFlyoutActionTypes.setContentEl,contentEl:this.el})},t.prototype.componentDidUnload=function(){this.dispatch({type:MenuFlyoutActionTypes.setContentEl,contentEl:void 0}),this.unsubscribe()},t.prototype.dispatch=function(t){this.store&&this.store.dispatch(t)},t.prototype.render=function(){return h("slot",null)},Object.defineProperty(t,"is",{get:function(){return"sdx-menu-flyout-list"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;position:absolute;top:0;left:0;z-index:60000;-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.2);box-shadow:0 0 4px 0 rgba(0,0,0,.2);width:254px}"},enumerable:!0,configurable:!0}),t}();export{MenuFlyoutList as SdxMenuFlyoutList};