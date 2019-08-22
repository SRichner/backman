/*! Built with http://stenciljs.com */
const{h:t}=window.webcomponents;import{a as i}from"./chunk-55a98941.js";import{a as e,b as s}from"./chunk-bc34555f.js";import{a as o,b as n}from"./chunk-6a8011c5.js";import{a as l,b as a,c as h,d as c,e as r,f as d,g as p,h as g}from"./chunk-c2033b1f.js";class u{constructor(){this.invokeDisplayChangeCallback=(()=>null),this.animationDuration=300,this.isClicking=!1,this.isHovering=!1,this.oppositeDirection={x:{"top-right":"top-left","top-left":"top-right","bottom-right":"bottom-left","bottom-left":"bottom-right"},y:{"top-right":"bottom-right","top-left":"bottom-left","bottom-right":"top-right","bottom-left":"top-left"}},this.easing={inQuadOutQuint:[.55,.085,.32,1]},this.arrowUnrotatedWidth=14,this.offset=16,this.display="closed",this.direction="bottom-right",this.closeOnClick=!1}directionChanged(){"closed"!==this.display?this.close().then(()=>{this.dispatchDirection(this.direction),this.open()}):this.dispatchDirection(this.direction)}toggleElChanged(){this.toggleElChild=this.toggleEl?this.toggleEl.children[0]:void 0}displayChangeCallbackChanged(){this.setInvokeDisplayChangeCallback()}componentWillLoad(){this.setInvokeDisplayChangeCallback(),this.store=o(this,e,this.getInitialState()),this.unsubscribe=n(this,this.store,["display","directionState","contentEl","toggleEl","arrowEls"]),this.dispatchDirection(this.direction),this.store.dispatch({type:s.setToggle,toggle:this.toggle.bind(this)})}displayChanged(){this.invokeDisplayChangeCallback(this.display)}componentDidLoad(){this.close()}componentDidUnload(){this.unsubscribe()}getInitialState(){return{display:"closed",directionState:"bottom-right",toggle:()=>Promise.resolve(),contentEl:void 0,toggleEl:void 0,arrowEls:[]}}onClick(){this.isClicking=!0}onWindowClick(){(!this.isClicking||"open"===this.display&&this.closeOnClick)&&this.close(),this.isClicking=!1}onMouseEnter(){this.isHovering=!0,this.open()}onMouseLeave(){setTimeout(()=>{this.isHovering||this.close()},400),this.isHovering=!1}toggle(){return"open"===this.display?this.close():"closed"===this.display?this.open():Promise.resolve()}open(){return new Promise(t=>{if(!this.contentEl)return;if("closed"!==this.display&&"closing"!==this.display)return void t();const e=this.contentEl;let o=this.directionState;this.store.dispatch({type:s.setDisplay,display:"opening"}),e.style.display="block",this.positionContentEl(o);const n=this.hasEnoughSpace(o,"x"),l=this.hasEnoughSpace(o,"y");if(!n){const t=this.oppositeDirection.x[o];this.positionContentEl(t,"x"),this.hasEnoughSpace(t,"x")?this.dispatchDirection(o=t):this.positionContentEl(t,"x",!0)}if(!l){const t=this.oppositeDirection.y[o];this.positionContentEl(t,"y"),this.hasEnoughSpace(t,"y")?this.dispatchDirection(t):this.positionContentEl(o,"y")}const a="top-left"===this.directionState||"top-right"===this.directionState?-this.offset:this.offset;i.remove(e),i({targets:e,duration:this.animationDuration,translateY:a,opacity:1,easing:this.easing.inQuadOutQuint,complete:()=>{this.store.dispatch({type:s.setDisplay,display:"open"}),t()}})})}close(){return new Promise(t=>{const e=this.contentEl;e&&("closed"===this.display?(e.style.display="none",e.style.opacity="0",t()):(this.store.dispatch({type:s.setDisplay,display:"closing"}),i.remove(e),i({targets:e,duration:this.animationDuration,translateY:0,opacity:0,easing:this.easing.inQuadOutQuint,complete:()=>{e.style.display="none",this.dispatchDirection(this.direction),this.store.dispatch({type:s.setDisplay,display:"closed"}),t()}})))})}setInvokeDisplayChangeCallback(){this.invokeDisplayChangeCallback=r(this.displayChangeCallback)}dispatchDirection(t){this.store.dispatch({type:s.setDirectionState,directionState:t})}hasEnoughSpace(t,i){if(!this.contentEl)return!1;const e=this.el.getBoundingClientRect(),s=this.contentEl.getBoundingClientRect();switch(i){case"x":{let i;return s.width<(i="top-left"===t||"bottom-left"===t?e.left:innerWidth-e.left)}case"y":let o,n;return"bottom-right"===t||"bottom-left"===t?n=(o=innerHeight-e.bottom)-(innerHeight-s.bottom):(o=e.top,n=innerHeight-(innerHeight-e.top)-s.top),(n+=this.offset)<o;default:return!0}}positionContentEl(t,i,e){if(!this.contentEl||!this.toggleEl)return;const s=this.contentEl,o=this.getContentElPosition(t);if(this.contentEl.style.opacity="0",this.contentEl.style.transform="translateY(0)",i&&"x"!==i||(this.contentEl.style.left=o[0]+"px"),i&&"y"!==i||(this.contentEl.style.top=o[1]+"px"),e){s.style.width=`${innerWidth-2*this.offset}px`;const i=this.toggleEl.getBoundingClientRect();s.style.left=`-${i.left-this.offset}px`;const e=this.getContentElPosition(t);s.style.top=`${e[1]}px`}const n=this.contentEl.getBoundingClientRect(),l=this.toggleEl.getBoundingClientRect();this.arrowEls.forEach(t=>{t.style.left=`${l.left-n.left+l.width/2-this.arrowUnrotatedWidth/2}px`})}getContentElPosition(t){if(!this.contentEl||!this.toggleElChild)return[0,0];const i=this.contentEl.getBoundingClientRect(),e=this.toggleElChild.getBoundingClientRect(),s=-i.height,o=e.height,n=e.width/2-(this.offset+this.arrowUnrotatedWidth),l=-(i.width-e.width)-n;switch(t){case"bottom-right":return[n,o];case"bottom-left":return[l,o];case"top-right":return[n,s];case"top-left":return[l,s];default:return[0,0]}}render(){return t("slot",null)}static get is(){return"sdx-menu-flyout"}static get encapsulation(){return"shadow"}static get properties(){return{arrowEls:{state:!0},close:{method:!0},closeOnClick:{type:Boolean,attr:"close-on-click"},contentEl:{state:!0},direction:{type:String,attr:"direction",watchCallbacks:["directionChanged"]},directionState:{state:!0},display:{state:!0,watchCallbacks:["displayChanged"]},displayChangeCallback:{type:String,attr:"display-change-callback",watchCallbacks:["displayChangeCallbackChanged"]},el:{elementRef:!0},open:{method:!0},toggle:{method:!0},toggleEl:{state:!0,watchCallbacks:["toggleElChanged"]}}}static get listeners(){return[{name:"click",method:"onClick"},{name:"touchend",method:"onClick",passive:!0},{name:"window:click",method:"onWindowClick"},{name:"window:touchend",method:"onWindowClick",passive:!0},{name:"mouseenter",method:"onMouseEnter",passive:!0},{name:"mouseleave",method:"onMouseLeave",passive:!0}]}static get style(){return".sc-sdx-menu-flyout-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-menu-flyout, .sc-sdx-menu-flyout:after, .sc-sdx-menu-flyout:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-sdx-menu-flyout-h{position:relative;display:inline-block}"}}export{u as SdxMenuFlyout};