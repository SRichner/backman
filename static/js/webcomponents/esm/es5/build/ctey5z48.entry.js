/*! Built with http://stenciljs.com */
import{h}from"../webcomponents.core.js";import{b as MenuFlyoutActionTypes}from"./chunk-bc34555f.js";import{b as mapStateToProps,c as getStore}from"./chunk-6a8011c5.js";var MenuFlyoutToggle=function(){function e(){}return e.prototype.onClick=function(){this.toggle()},e.prototype.componentWillLoad=function(){this.store=getStore(this),this.unsubscribe=mapStateToProps(this,this.store,["display","toggle"]),this.dispatch({type:MenuFlyoutActionTypes.setToggleEl,toggleEl:this.el})},e.prototype.componentDidUnload=function(){this.dispatch({type:MenuFlyoutActionTypes.setToggleEl,toggleEl:void 0}),this.unsubscribe()},e.prototype.dispatch=function(e){this.store&&this.store.dispatch(e)},e.prototype.render=function(){return h("sdx-button",{theme:"transparent"},h("slot",null))},Object.defineProperty(e,"is",{get:function(){return"sdx-menu-flyout-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{display:{state:!0},el:{elementRef:!0},toggle:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host button{cursor:pointer;padding:0;margin:0;border:0;background-color:transparent}:host button:focus,:host button:hover{color:#0851da}"},enumerable:!0,configurable:!0}),e}();export{MenuFlyoutToggle as SdxMenuFlyoutToggle};