/*! Built with http://stenciljs.com */
import{h}from"../webcomponents.core.js";var Arrow=function(){function e(){this.direction="down",this.hover=!1,this.arrowPosition="none"}return e.prototype.render=function(){return h("slot",null)},Object.defineProperty(e,"is",{get:function(){return"sdx-accordion-arrow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{arrowPosition:{type:String,attr:"arrow-position"},direction:{type:String,attr:"direction"},hover:{type:Boolean,attr:"hover"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:none}:host([hover=true]){position:relative}:host([hover=true]):after,:host([hover=true]):before{position:absolute;top:50%;-webkit-transition:all .2s cubic-bezier(.4,0,.2,1);transition:all .2s cubic-bezier(.4,0,.2,1);border-radius:2px;background:#0851da;width:10px;height:2px;-webkit-backface-visibility:hidden;backface-visibility:hidden;content:\"\"}:host([hover=true]):before{left:0}:host([hover=true]):after{left:6px}:host([arrow-position=center]),:host([arrow-position=left]),:host([arrow-position=right]){position:relative;top:4px;left:0;width:35px;height:16px;-webkit-transform:scale(.68);transform:scale(.68);pointer-events:none;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}:host([arrow-position=center]):after,:host([arrow-position=center]):before,:host([arrow-position=left]):after,:host([arrow-position=left]):before,:host([arrow-position=right]):after,:host([arrow-position=right]):before{position:absolute;top:50%;-webkit-transition:all .2s cubic-bezier(.4,0,.2,1);transition:all .2s cubic-bezier(.4,0,.2,1);border-radius:3px;background:#1781e3;width:20px;height:3px;-webkit-backface-visibility:hidden;backface-visibility:hidden;content:\"\"}:host([arrow-position=center]):before,:host([arrow-position=left]):before,:host([arrow-position=right]):before{left:0}:host([arrow-position=center]):after,:host([arrow-position=left]):after,:host([arrow-position=right]):after{left:15px}:host([arrow-position=center]):before,:host([arrow-position=left]):before,:host([arrow-position=right]):before{-webkit-transform:rotate(35deg);transform:rotate(35deg)}:host([arrow-position=center]):after,:host([arrow-position=left]):after,:host([arrow-position=right]):after{-webkit-transform:rotate(-35deg);transform:rotate(-35deg)}:host([hover=true][arrow-position=center]),:host([hover=true][arrow-position=left]),:host([hover=true][arrow-position=right]){position:relative}:host([hover=true][arrow-position=center]):after,:host([hover=true][arrow-position=center]):before,:host([hover=true][arrow-position=left]):after,:host([hover=true][arrow-position=left]):before,:host([hover=true][arrow-position=right]):after,:host([hover=true][arrow-position=right]):before{position:absolute;top:50%;-webkit-transition:all .2s cubic-bezier(.4,0,.2,1);transition:all .2s cubic-bezier(.4,0,.2,1);border-radius:3px;background:#0851da;width:20px;height:3px;-webkit-backface-visibility:hidden;backface-visibility:hidden;content:\"\"}:host([hover=true][arrow-position=center]):before,:host([hover=true][arrow-position=left]):before,:host([hover=true][arrow-position=right]):before{left:0}:host([hover=true][arrow-position=center]):after,:host([hover=true][arrow-position=left]):after,:host([hover=true][arrow-position=right]):after{left:15px}:host([direction=up][arrow-position=center]):before,:host([direction=up][arrow-position=left]):before,:host([direction=up][arrow-position=right]):before{-webkit-transform:rotate(-35deg);transform:rotate(-35deg)}:host([direction=up][arrow-position=center]):after,:host([direction=up][arrow-position=left]):after,:host([direction=up][arrow-position=right]):after{-webkit-transform:rotate(35deg);transform:rotate(35deg)}:host([arrow-position=right]){display:inline-block;float:right}:host([arrow-position=left]){display:inline-block;float:left}:host([arrow-position=center]){display:table;margin:-13px auto 0;float:none}"},enumerable:!0,configurable:!0}),e}(),DEFAULT_ARROW_POSITION="none",Header=function(){function e(){this.arrowPosition="none",this.expand=!1,this.toggle=function(){return""}}return e.prototype.arrowPositionChanged=function(){this.setArrowPosition()},e.prototype.activeItemChanged=function(){this.setArrowDirection()},e.prototype.componentDidLoad=function(){this.setChildElementsReferences(),this.setArrowPosition(),this.setArrowDirection()},e.prototype.onClick=function(){this.toggle()},e.prototype.onMouseOver=function(){this.setArrowHover("true")},e.prototype.onMouseOut=function(){this.setArrowHover("false")},e.prototype.closeItem=function(){this.expand&&this.toggle()},e.prototype.openItem=function(){this.expand||this.toggle()},e.prototype.setChildElementsReferences=function(){this.el.shadowRoot&&(this.arrowEl=this.el.shadowRoot.querySelector("sdx-accordion-arrow"))},e.prototype.setArrowPosition=function(){this.arrowEl&&this.arrowEl.setAttribute("arrow-position",this.arrowPosition)},e.prototype.setArrowDirection=function(){this.arrowEl&&this.arrowEl.setAttribute("direction",this.expand?"up":"down")},e.prototype.setArrowHover=function(e){this.arrowEl&&DEFAULT_ARROW_POSITION!==this.arrowPosition&&this.arrowEl.setAttribute("hover",e)},e.prototype.render=function(){return h("button",{class:"content","aria-expanded":this.expand.toString()},h("div",{class:"header"},h("slot",null)),h("sdx-accordion-arrow",null))},Object.defineProperty(e,"is",{get:function(){return"sdx-accordion-item-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{arrowPosition:{type:String,attr:"arrow-position",watchCallbacks:["arrowPositionChanged"]},closeItem:{method:!0},el:{elementRef:!0},expand:{type:Boolean,attr:"expand",watchCallbacks:["activeItemChanged"]},openItem:{method:!0},toggle:{type:"Any",attr:"toggle"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"mouseover",method:"onMouseOver",passive:!0},{name:"mouseout",method:"onMouseOut",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host .header{width:100%}:host .content{color:#333;display:block;margin:0;padding:13px 13px 14px 19px;border:0;width:100%;cursor:pointer;outline:none}:host button{font-family:inherit;margin:0;background:transparent;text-align:left}:host([arrow-position=left]) .header{padding-left:10px}:host([arrow-position=left]) .header,:host([arrow-position=right]) .header{width:calc(100% - 35px);margin:0;display:inline-block;position:relative}:host([arrow-position=center]) .header{display:none}:host([arrow-position=center]) .content{width:100%;min-height:32px;border-top:1px solid #d6d6d6}"},enumerable:!0,configurable:!0}),e}();export{Arrow as SdxAccordionArrow,Header as SdxAccordionItemHeader};