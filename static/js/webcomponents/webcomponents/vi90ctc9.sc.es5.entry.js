/*! Built with http://stenciljs.com */
webcomponents.loadBundle("vi90ctc9",["exports","./chunk-8e184461.js","./chunk-a6d5c435.js"],function(t,e,o){var n=window.webcomponents.h,r=function(){function t(){this.name=""}return t.prototype.componentWillLoad=function(){this.store=o.getStore(this),this.unsubscribe=o.mapStateToProps(this,this.store,["direction","filter","filterFunction"]),this.dispatch({type:e.SelectActionTypes.toggleOptGroupEl,optgroupEl:this.el})},t.prototype.componentDidUnload=function(){this.dispatch({type:e.SelectActionTypes.toggleOptGroupEl,optgroupEl:this.el}),this.unsubscribe()},t.prototype.dispatch=function(t){this.store&&this.store.dispatch(t)},t.prototype.optgroupElMatchesFilter=function(t,e){for(var o=!1,n=0,r=t.querySelectorAll("sdx-select-option");n<r.length;n++)if(this.filterFunction(r[n],e)){o=!0;break}return o},t.prototype.hostData=function(){var t;return{style:{display:this.optgroupElMatchesFilter(this.el,this.filter)?"":"none"},class:(t={},t[this.direction]=!0,t)}},t.prototype.render=function(){return n("div",{class:"wrapper"},this.name&&n("div",{class:"title"},this.name),n("slot",null))},Object.defineProperty(t,"is",{get:function(){return"sdx-select-optgroup"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{direction:{state:!0},el:{elementRef:!0},filter:{state:!0},filterFunction:{state:!0},name:{type:String,attr:"name"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-sdx-select-optgroup-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-select-optgroup, .sc-sdx-select-optgroup:after, .sc-sdx-select-optgroup:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-sdx-select-optgroup-h{display:block}.sc-sdx-select-optgroup-h .sc-sdx-select-optgroup-s > sdx-select-option{border-top:none;border-bottom:none}.sc-sdx-select-optgroup-h   .wrapper.sc-sdx-select-optgroup{border-top:1px solid #d6d6d6;border-bottom:1px solid #d6d6d6}.sc-sdx-select-optgroup-h   .wrapper.sc-sdx-select-optgroup   .title.sc-sdx-select-optgroup{font-weight:600;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px;height:48px;border-left:1px solid #d6d6d6;border-right:1px solid #d6d6d6}.top.sc-sdx-select-optgroup-h   .wrapper.sc-sdx-select-optgroup{border-top:none}.bottom.sc-sdx-select-optgroup-h   .wrapper.sc-sdx-select-optgroup{border-bottom:none}"},enumerable:!0,configurable:!0}),t}();t.SdxSelectOptgroup=r,Object.defineProperty(t,"__esModule",{value:!0})});