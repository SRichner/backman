/*! Built with http://stenciljs.com */
import{h}from"../webcomponents.core.js";import{b as MenuFlyoutActionTypes}from"./chunk-bc34555f.js";import{b as mapStateToProps,c as getStore}from"./chunk-6a8011c5.js";var MenuFlyoutListItem=function(){function t(){this.selectable=!0,this.href="javascript:void(0);",this.disabled=!1}return t.prototype.componentWillLoad=function(){this.store=getStore(this),this.unsubscribe=mapStateToProps(this,this.store,["directionState"])},t.prototype.componentDidLoad=function(){this.dispatch({type:MenuFlyoutActionTypes.toggleArrowEl,arrowEl:this.arrowEl})},t.prototype.componentDidUnload=function(){this.dispatch({type:MenuFlyoutActionTypes.toggleArrowEl,arrowEl:this.arrowEl}),this.unsubscribe()},t.prototype.dispatch=function(t){this.store&&this.store.dispatch(t)},t.prototype.hostData=function(){var t;return{class:(t={selectable:this.selectable&&!this.disabled,disabled:this.disabled},t[this.directionState]=!0,t)}},t.prototype.render=function(){var t=this;return h("div",{class:"item"},h("div",{class:"arrow",ref:function(e){return t.arrowEl=e}}),h("a",{href:this.href,class:"body"},h("slot",null)))},Object.defineProperty(t,"is",{get:function(){return"sdx-menu-flyout-list-item"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{directionState:{state:!0},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},selectable:{type:Boolean,attr:"selectable"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host>.item>.arrow{display:none;position:absolute;background-color:#fff;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host{display:block}:host>.item>.body{position:relative;background-color:#fff;color:#1781e3;display:block;padding:12px 24px;text-align:center;text-decoration:none;-webkit-transition:border-bottom .2s cubic-bezier(.4,0,.6,1),color .2s cubic-bezier(.4,0,.6,1);transition:border-bottom .2s cubic-bezier(.4,0,.6,1),color .2s cubic-bezier(.4,0,.6,1)}:host(.selectable)>.item>.body{cursor:pointer}:host(:not(.selectable))>.item>.body{cursor:not-allowed}:host(.selectable:hover)>.item>.arrow,:host(.selectable:hover)>.item>.body{color:#fff;background-color:#1781e3!important}:host(.disabled)>.item>.body{color:#d6d6d6}:host(:not(:last-of-type))>.item>.body{border-bottom:1px solid #e4e9ec}:host(.bottom-left:first-of-type)>.item>.arrow,:host(.bottom-right:first-of-type)>.item>.arrow{display:block;top:-7px;-webkit-box-shadow:-1px -1px 2px 0 rgba(0,0,0,.15);box-shadow:-1px -1px 2px 0 rgba(0,0,0,.15)}:host(.top-left:last-of-type)>.item>.arrow,:host(.top-right:last-of-type)>.item>.arrow{display:block;bottom:-7px;-webkit-box-shadow:1px 1px 2px 0 rgba(0,0,0,.15);box-shadow:1px 1px 2px 0 rgba(0,0,0,.15)}"},enumerable:!0,configurable:!0}),t}();export{MenuFlyoutListItem as SdxMenuFlyoutListItem};