/*! Built with http://stenciljs.com */
const{h:e}=window.webcomponents;import{a as t,b as o,c as s,d as i,e as r,f as n,g as a,h as c}from"./chunk-c2033b1f.js";class l{constructor(){this.openedItems=[],this.arrowPosition="none",this.keepOpen=!1}arrowPropertyChanged(){this.initiateComponent()}componentWillLoad(){this.initiateComponent()}componentDidLoad(){o(this.el,()=>this.onSlotChange())}onSlotChange(){this.initiateComponent()}close(e){let t=this.accordionItemEls[e];this.keepOpen||this.closeNotIgnoredItems(e),t.querySelector("sdx-accordion-item-header")&&(t.setAttribute("open","false"),this.trackOpenItems(e,"false"))}closeAll(){this.openedItems=[];for(let e=0;e<this.accordionItemEls.length;e++){let t=this.accordionItemEls[e];t.querySelector("sdx-accordion-item-header")&&(t.setAttribute("open","false"),this.trackOpenItems(e,"false"))}}toggle(e){let t=this.accordionItemEls[e];if(this.keepOpen||this.closeNotIgnoredItems(e),t.querySelector("sdx-accordion-item-header")){const o="false"===(t.getAttribute("open")||"false")?"true":"false";t.setAttribute("open",o),this.trackOpenItems(e,o)}}open(e){let t=this.accordionItemEls[e];this.keepOpen||this.closeNotIgnoredItems(e),t.querySelector("sdx-accordion-item-header")&&(t.setAttribute("open","true"),this.trackOpenItems(e,"true"))}openAll(){if(this.keepOpen||1===this.accordionItemEls.length){this.openedItems=[];for(let e=0;e<this.accordionItemEls.length;e++){let t=this.accordionItemEls[e];t.querySelector("sdx-accordion-item-header")&&(t.setAttribute("open","true"),this.trackOpenItems(e,"true"))}}}initiateComponent(){this.setChildElementsReferences(),this.initiateAccordionItems()}setChildElementsReferences(){this.accordionItemEls=this.el.querySelectorAll("sdx-accordion-item")}initiateAccordionItems(){this.openedItems=[];for(let e=0;e<this.accordionItemEls.length;++e){const t=this.accordionItemEls[e],o=t.querySelector("sdx-accordion-item-header");if(o){let s="false";t.hasAttribute("open")&&"false"!==t.getAttribute("open")&&(s="true"),t.setAttribute("open",s),t.setAttribute("arrow-position",this.arrowPosition),o.setAttribute("arrow-position",this.arrowPosition);const i=t.querySelector("sdx-accordion-item-body");i&&i.setAttribute("arrow-position",this.arrowPosition),this.trackOpenItems(e,s),o.toggle=this.toggle.bind(this,e)}}}closeNotIgnoredItems(e){for(let t=0;t<this.openedItems.length;t++)this.openedItems[t]!==e&&this.accordionItemEls[this.openedItems[t]].setAttribute("open","false");this.openedItems=[]}trackOpenItems(e,t){this.keepOpen||"true"!==t||this.openedItems.push(e)}render(){return e("slot",null)}static get is(){return"sdx-accordion"}static get encapsulation(){return"shadow"}static get properties(){return{arrowPosition:{type:String,attr:"arrow-position",watchCallbacks:["arrowPropertyChanged"]},close:{method:!0},closeAll:{method:!0},el:{elementRef:!0},keepOpen:{type:Boolean,attr:"keep-open",watchCallbacks:["arrowPropertyChanged"]},open:{method:!0},openAll:{method:!0},toggle:{method:!0}}}static get style(){return".sc-sdx-accordion-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-accordion, .sc-sdx-accordion:after, .sc-sdx-accordion:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-sdx-accordion-h{display:block;border-bottom:1px solid #d6d6d6}"}}export{l as SdxAccordion};