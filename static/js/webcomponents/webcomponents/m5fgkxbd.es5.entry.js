/*! Built with http://stenciljs.com */
webcomponents.loadBundle("m5fgkxbd",["exports","./chunk-604eb996.js","./chunk-a6d5c435.js","./chunk-033c5f29.js"],function(t,e,n,o){var i=window.webcomponents.h,s=function(){function t(){this.invokeChangeCallback=function(){return null},this.componentDidLoadComplete=!1,this.type="radio",this.name="",this.inline=!1,this.label=""}return t.prototype.typeChanged=function(){this.store.dispatch({type:o.InputGroupActionTypes.setTypeState,typeState:this.type})},t.prototype.changeCallbackChanged=function(){this.setInvokeChangeCallback()},t.prototype.nameChanged=function(){this.dispatchNameAction()},t.prototype.inlineChanged=function(){this.store.dispatch({type:o.InputGroupActionTypes.setInline,inline:this.inline})},t.prototype.selectedInputItemElsChanged=function(){this.componentDidLoadComplete&&this.invokeChangeCallback(this.getSelection())},t.prototype.selectNextInputItemElFromChanged=function(){if(this.selectNextInputItemElFrom){for(var t=e.getNextFromList(this.inputItemElsSorted,this.selectNextInputItemElFrom);t!==this.selectNextInputItemElFrom&&t.disabled;)t=e.getNextFromList(this.inputItemElsSorted,t);this.store.dispatch({type:o.InputGroupActionTypes.selectInputItemEl,inputItemEl:t})}},t.prototype.selectPreviousInputItemElFromChanged=function(){if(this.selectPreviousInputItemElFrom){for(var t=e.getPreviousFromList(this.inputItemElsSorted,this.selectPreviousInputItemElFrom);t!==this.selectPreviousInputItemElFrom&&t.disabled;)t=e.getPreviousFromList(this.inputItemElsSorted,t);this.store.dispatch({type:o.InputGroupActionTypes.selectInputItemEl,inputItemEl:t})}},t.prototype.getSelection=function(){return this.selectedInputItemEls.map(function(t){return t.value})},t.prototype.componentWillLoad=function(){this.setInvokeChangeCallback(),this.store=n.createAndInstallStore(this,o.inputGroupReducer,this.getInitialState()),this.unsubscribe=n.mapStateToProps(this,this.store,["typeState","selectedInputItemEls","selectNextInputItemElFrom","selectPreviousInputItemElFrom","inputItemElsSorted"]),this.store.dispatch({type:o.InputGroupActionTypes.setTypeState,typeState:this.type})},t.prototype.componentDidLoad=function(){this.name&&this.dispatchNameAction(),this.store.dispatch({type:o.InputGroupActionTypes.setInline,inline:this.inline}),this.componentDidLoadComplete=!0},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.getInitialState=function(){return{typeState:"radio",nameState:"",inline:!1,selectedInputItemEls:[],selectNextInputItemElFrom:void 0,selectPreviousInputItemElFrom:void 0,inputItemElsSorted:[]}},t.prototype.dispatchNameAction=function(){this.store.dispatch({type:o.InputGroupActionTypes.setNameState,nameState:this.name})},t.prototype.setInvokeChangeCallback=function(){this.invokeChangeCallback=e.parseFunction(this.changeCallback)},t.prototype.hostData=function(){return{role:"radio"===this.typeState?"radiogroup":null}},t.prototype.render=function(){return i("div",{class:"wrapper"},this.label&&i("label",null,this.label),i("slot",null))},Object.defineProperty(t,"is",{get:function(){return"sdx-input-group"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{changeCallback:{type:String,attr:"change-callback",watchCallbacks:["changeCallbackChanged"]},el:{elementRef:!0},getSelection:{method:!0},inline:{type:Boolean,attr:"inline",watchCallbacks:["inlineChanged"]},inputItemElsSorted:{state:!0},label:{type:String,attr:"label"},name:{type:String,attr:"name",watchCallbacks:["nameChanged"]},nameState:{state:!0},selectedInputItemEls:{state:!0,watchCallbacks:["selectedInputItemElsChanged"]},selectNextInputItemElFrom:{state:!0,watchCallbacks:["selectNextInputItemElFromChanged"]},selectPreviousInputItemElFrom:{state:!0,watchCallbacks:["selectPreviousInputItemElFromChanged"]},type:{type:String,attr:"type",watchCallbacks:["typeChanged"]},typeState:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}label{display:block;margin-bottom:6px;cursor:text;color:#666;font-size:14px}"},enumerable:!0,configurable:!0}),t}();t.SdxInputGroup=s,Object.defineProperty(t,"__esModule",{value:!0})});