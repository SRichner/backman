/*! Built with http://stenciljs.com */
webcomponents.loadBundle("6hjksvbs",["exports","./chunk-b17d64d4.js"],function(e,t){var i=window.webcomponents.h,n=function(){function e(){this.initialLoad=!0,this.easing={inQuadOutQuint:[.55,.085,.32,1]},this.arrowPosition="none"}return e.prototype.toggle=function(e){this.initialLoad?this.initiateOpenState(e):e?this.openCollapseSection():this.closeCollapseSection()},e.prototype.initiateOpenState=function(e){e&&this.el.classList.add("open"),this.initialLoad=!1},e.prototype.openCollapseSection=function(){var e=this;this.stopAnimations(),this.el.style.display="block",this.animation=t.anime.timeline().add({targets:this.el,duration:300,height:this.el.scrollHeight+"px",easing:this.easing.inQuadOutQuint,complete:function(){e.el.style.height="auto",e.el.setAttribute("aria-expanded","true"),e.el.classList.add("open")}}).add({targets:this.el,duration:150,opacity:1,easing:"linear",offset:50})},e.prototype.closeCollapseSection=function(){var e=this;this.stopAnimations(),this.animation=t.anime.timeline().add({targets:this.el,duration:300,height:"0px",easing:this.easing.inQuadOutQuint,complete:function(){e.el.style.display="none",e.el.setAttribute("aria-expanded","false"),e.el.classList.remove("open")}}).add({targets:this.el,duration:150,opacity:0,easing:"linear",offset:0})},e.prototype.stopAnimations=function(){this.animation&&this.animation.pause(),t.anime.remove(this.el)},e.prototype.render=function(){return i("slot",null)},Object.defineProperty(e,"is",{get:function(){return"sdx-accordion-item-body"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{arrowPosition:{type:String,attr:"arrow-position"},el:{elementRef:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host{position:relative;overflow:hidden;display:none;height:0;opacity:0;padding:0 13px 14px 19px}:host(.open){display:block;height:auto;opacity:1}:host([arrow-position=center]){padding-left:15px;padding-right:15px}:host([arrow-position=center].open){padding-bottom:16px}"},enumerable:!0,configurable:!0}),e}();e.SdxAccordionItemBody=n,Object.defineProperty(e,"__esModule",{value:!0})});