/*! Built with http://stenciljs.com */
const{h:a}=window.webcomponents;import{a as e,b as t,c as l,d as s,e as i,f as n,g as h,h as c,i as r}from"./chunk-c2033b1f.js";class o{constructor(){this.invokeSearchSubmitCallback=(()=>null),this.invokeValueChangeCallback=(()=>null),this.invokeChangeCallback=(()=>null),this.inputValue="",this.placeholder="",this.srHint="",this.srHintForButton=""}searchSubmitCallbackChanged(){this.setInvokeSearchSubmitCallback()}valueChangeCallbackChanged(){this.setInvokeValueChangeCallback()}changeCallbackChanged(){this.setInvokeChangeCallback()}onWindowResizeThrottled(){this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.el.forceUpdate()},10)}componentWillLoad(){this.setInvokeSearchSubmitCallback(),this.setInvokeValueChangeCallback()}submitSearch(){this.sdxInputEl&&this.invokeSearchSubmitCallback(this.sdxInputEl.getValue())}changeHandler(a){this.inputValue=a,this.invokeValueChangeCallback(a),this.invokeChangeCallback(a)}setInvokeSearchSubmitCallback(){this.invokeSearchSubmitCallback=i(this.searchSubmitCallback)}setInvokeValueChangeCallback(){this.invokeValueChangeCallback=i(this.valueChangeCallback)}setInvokeChangeCallback(){this.invokeChangeCallback=i(this.changeCallback)}showSearchIcon(){return r()||!this.inputValue.length}render(){return a("div",{class:"wrapper"},a("sdx-input",{id:"searchField",srHint:this.srHint,clearable:!r(),type:"search",placeholder:this.placeholder,hitEnterCallback:()=>this.submitSearch(),changeCallback:a=>this.changeHandler(a),ref:a=>this.sdxInputEl=a,role:"search",inputStyle:{paddingRight:this.showSearchIcon()?"64px":"0px"}}),a("sdx-button",{theme:"transparent","sr-hint":this.srHintForButton,onClick:()=>this.submitSearch()},a("sdx-icon",{iconName:"icon-077-search",size:3,flip:"horizontal",hidden:!this.showSearchIcon(),"aria-hidden":"true"})))}static get is(){return"sdx-search"}static get encapsulation(){return"shadow"}static get properties(){return{changeCallback:{type:String,attr:"change-callback",watchCallbacks:["changeCallbackChanged"]},el:{elementRef:!0},inputValue:{state:!0},placeholder:{type:String,attr:"placeholder"},searchSubmitCallback:{type:String,attr:"search-submit-callback",watchCallbacks:["searchSubmitCallbackChanged"]},srHint:{type:String,attr:"sr-hint"},srHintForButton:{type:String,attr:"sr-hint-for-button"},valueChangeCallback:{type:String,attr:"value-change-callback",watchCallbacks:["valueChangeCallbackChanged"]}}}static get listeners(){return[{name:"window:resize",method:"onWindowResizeThrottled",passive:!0}]}static get style(){return"\@charset \"UTF-8\";.sc-sdx-search-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-search, .sc-sdx-search:after, .sc-sdx-search:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sr-only.sc-sdx-search{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable.sc-sdx-search:active, .sr-only-focusable.sc-sdx-search:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.wrapper.sc-sdx-search{position:relative}.wrapper.sc-sdx-search > sdx-button.sc-sdx-search{padding:6px;position:absolute;right:5px;top:2px}"}}export{o as SdxSearch};