/*! Built with http://stenciljs.com */
import{h}from"../webcomponents.core.js";import{a as anime}from"./chunk-55a98941.js";import{b as installSlotObserver,e as parseFunction}from"./chunk-c2033b1f.js";var OPEN_CLASSNAME="open",CLOSE_CLASSNAME="hide-content",ARROW_HIDDEN_CLASSNAME="arrow--hidden",HIDE_ARROWS_CLASSNAME="hide-arrows",STEP_CHANGE_ANIMATION=400,ProgressFull=function(){function t(){this.lastSentActiveStep=-1,this.initIndex=1,this.stepsCount=0,this.allowedVisibleSteps=1,this.minVisible=0,this.maxVisible=0,this.minPossibleBars=3,this.invokeStepChangeCallback=function(){return null},this.activeStep=-1,this.previousActiveStep=void 0,this.step=1,this.stepsLabel="",this.animated=!0}return t.prototype.stepChanged=function(){this.setActiveStep(this.step,this.animated)},t.prototype.stepChangeCallbackChanged=function(){this.setInvokeStepChangeCallback()},t.prototype.componentWillLoad=function(){this.setInvokeStepChangeCallback(),this.activeStep<0&&(this.activeStep=this.activeStep&&-1!==this.activeStep?this.activeStep:this.step)},t.prototype.componentDidLoad=function(){var t=this;this.setChildElementsReferences(),this.setEventsOnSteps(),this.setActiveStep(this.activeStep,this.animated),installSlotObserver(this.el,function(){return t.onSlotChange()})},t.prototype.onWindowResizeThrottled=function(){var t=this;this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(function(){t.setActiveStep(t.activeStep,!1)},10)},t.prototype.onSlotChange=function(){this.setChildElementsReferences(),this.setEventsOnSteps()},t.prototype.nextStep=function(){this.stepEls&&this.activeStep<this.stepsCount&&this.setActiveStep(++this.activeStep,this.animated)},t.prototype.previousStep=function(){this.stepEls&&this.activeStep>this.indexUpdate(0)&&this.setActiveStep(--this.activeStep,this.animated)},t.prototype.getActiveStep=function(){return this.activeStep},t.prototype.setActiveStep=function(t,e){this.stepEls&&(this.activeStep=isNaN(t)||t<1?this.initIndex:t>this.stepsCount?this.stepsCount+this.initIndex-1:t,this.calculateVisibleSteps(),this.updateStepElements(e),this.setPreviousStep(this.activeStep))},t.prototype.scrollLeft=function(){this.stepEls&&this.shouldDisplayLeftArrow()&&(this.shiftVisibleStepLeft(),this.updateStepElements(this.animated))},t.prototype.scrollRight=function(){this.stepEls&&this.shouldDisplayRightArrow()&&(this.shiftVisibleStepRight(),this.updateStepElements(this.animated))},t.prototype.setChildElementsReferences=function(){if(this.stepEls=this.el.querySelectorAll("sdx-progress-full-step"),this.stepEls&&(this.stepsCount=this.stepEls.length),this.el.shadowRoot){var t=this.el.shadowRoot.querySelectorAll(".left-arrow");t&&t.length>0&&(this.leftArrowEl=t[0]);var e=this.el.shadowRoot.querySelectorAll(".right-arrow");e&&e.length>0&&(this.rightArrowEl=e[0])}},t.prototype.setEventsOnSteps=function(){for(var t=0;t<this.stepsCount;t++)this.stepEls[t].stepClickCallback=this.setActiveStep.bind(this,this.indexUpdate(t),this.animated)},t.prototype.calculateVisibleSteps=function(){this.allowedVisibleSteps=Math.floor(this.el.offsetWidth/100),this.stepsCount<=this.minPossibleBars?this.allowedVisibleSteps=this.stepsCount:this.allowedVisibleSteps<this.minPossibleBars?this.allowedVisibleSteps=this.minPossibleBars:this.stepsCount<this.allowedVisibleSteps&&(this.allowedVisibleSteps=this.stepsCount),this.activeStep<this.allowedVisibleSteps?(this.minVisible=1,this.maxVisible=this.allowedVisibleSteps):this.activeStep<this.stepsCount-1?(this.minVisible=this.activeStep-this.allowedVisibleSteps+2,this.maxVisible=this.activeStep+1):(this.minVisible=this.stepsCount-this.allowedVisibleSteps+1,this.maxVisible=this.stepsCount)},t.prototype.shiftVisibleStepLeft=function(){this.minVisible>1&&(this.minVisible--,this.maxVisible--)},t.prototype.shiftVisibleStepRight=function(){this.maxVisible<this.stepsCount&&(this.minVisible++,this.maxVisible++)},t.prototype.updateStepElements=function(t){if(this.stepEls){this.updateInfoElement(),this.updateArrows();for(var e=0;e<this.stepsCount;e++)this.updateStepElement(e,t);this.informActiveStepChanged()}},t.prototype.updateArrows=function(){if(this.leftArrowEl&&this.rightArrowEl){var t=this.getArrowWidth();this.leftArrowEl.style.width=t,this.rightArrowEl.style.width=t,this.shouldDisplayLeftArrow()?this.leftArrowEl.classList.remove(ARROW_HIDDEN_CLASSNAME):this.leftArrowEl.classList.add(ARROW_HIDDEN_CLASSNAME),this.shouldDisplayRightArrow()?this.rightArrowEl.classList.remove(ARROW_HIDDEN_CLASSNAME):this.rightArrowEl.classList.add(ARROW_HIDDEN_CLASSNAME),this.shouldDisplayArrows()?this.el.classList.remove(HIDE_ARROWS_CLASSNAME):this.el.classList.add(HIDE_ARROWS_CLASSNAME)}},t.prototype.shouldDisplayArrows=function(){return this.allowedVisibleSteps!==this.stepsCount},t.prototype.shouldDisplayRightArrow=function(){return this.maxVisible<this.stepsCount&&this.activeStep>=this.maxVisible},t.prototype.shouldDisplayLeftArrow=function(){return this.minVisible>1},t.prototype.updateStepElement=function(t,e){var i=this.indexUpdate(t);this.setStepElementAttributes(t,i),anime.remove(this.stepEls[t]),this.isLeftOutOfSight(i)||this.isRightOutOfSight(i)?this.handleOutofSightElement(e,t,i):this.handleInSightElement(e,t)},t.prototype.handleInSightElement=function(t,e){var i=this.stepEls[e];i.style.display="inline-block",i.style.width=this.getCorrectWidth(),this.shouldAnimateElementFadeIn(t,e)?this.fadeInElement(e):this.showElement(e)},t.prototype.handleOutofSightElement=function(t,e,i){var s="-"+this.getCorrectWidth();this.shouldAnimateElementFadeOut(t,e)?this.fadeOutElement(e,i,s):this.hideElement(e,i,s)},t.prototype.showElement=function(t){var e=this.stepEls[t];e.style.marginLeft="0",e.style.marginRight="0",e.style.opacity=null,e.classList.add(OPEN_CLASSNAME),e.classList.remove(CLOSE_CLASSNAME)},t.prototype.fadeInElement=function(t){var e=this.stepEls[t];anime({targets:e,duration:STEP_CHANGE_ANIMATION,marginLeft:"0",marginRight:"0",opacity:1,easing:"easeOutQuad",complete:function(){e.classList.add(OPEN_CLASSNAME),e.classList.remove(CLOSE_CLASSNAME)}})},t.prototype.hideElement=function(t,e,i){var s=this.stepEls[t];s.style.display="none",s.style.marginLeft=this.isLeftOutOfSight(e)?i:"0",s.style.marginRight=this.isRightOutOfSight(e)?i:"0",s.classList.add(CLOSE_CLASSNAME),s.classList.remove(OPEN_CLASSNAME)},t.prototype.fadeOutElement=function(t,e,i){var s=this.stepEls[t];anime({targets:s,duration:STEP_CHANGE_ANIMATION,marginLeft:this.isLeftOutOfSight(e)?i:"0",marginRight:this.isRightOutOfSight(e)?i:"0",opacity:0,easing:"easeOutQuad",complete:function(){s.style.display="none",s.classList.add(CLOSE_CLASSNAME),s.classList.remove(OPEN_CLASSNAME)}})},t.prototype.shouldAnimateElementFadeIn=function(t,e){return t&&this.stepEls[e].classList.contains(CLOSE_CLASSNAME)},t.prototype.shouldAnimateElementFadeOut=function(t,e){return t&&this.stepEls[e].classList.contains(OPEN_CLASSNAME)},t.prototype.setStepElementAttributes=function(t,e){var i=this.stepEls[t];i.setAttribute("status",this.getStepStatus(e)),i.setAttribute("value",e.toString()),i.setAttribute("total",this.allowedVisibleSteps.toString()),i.setAttribute("position",this.recalculateStepPosition(e))},t.prototype.getStepStatus=function(t){return t>this.activeStep?"none":t===this.activeStep?"active":"completed"},t.prototype.isRightOutOfSight=function(t){return t>this.maxVisible},t.prototype.isLeftOutOfSight=function(t){return t<this.minVisible},t.prototype.updateInfoElement=function(){this.allowedVisibleSteps!==this.stepsCount&&this.stepsLabel?this.el.classList.remove("hide-steps-label"):this.el.classList.add("hide-steps-label")},t.prototype.recalculateStepPosition=function(t){return 1===t?"first":t===this.stepsCount?"last":t===this.minVisible?"middle-left":t===this.maxVisible?"middle-right":t>1&&t<this.stepsCount?"middle":"none"},t.prototype.indexUpdate=function(t){return t+this.initIndex},t.prototype.getCorrectWidth=function(){return this.el.clientWidth/this.allowedVisibleSteps+"px"},t.prototype.getArrowWidth=function(){return"calc(("+(Math.floor(100/this.allowedVisibleSteps)+100%this.allowedVisibleSteps-1)+"% - 24px) / 2)"},t.prototype.informActiveStepChanged=function(){this.lastSentActiveStep!==this.activeStep&&(this.lastSentActiveStep=this.activeStep,this.invokeStepChangeCallback(this.activeStep,this.previousActiveStep))},t.prototype.setPreviousStep=function(t){this.previousActiveStep=t},t.prototype.setInvokeStepChangeCallback=function(){this.invokeStepChangeCallback=parseFunction(this.stepChangeCallback)},t.prototype.render=function(){var t=this;return[h("div",{class:"info-content"},this.stepsCount," ",this.stepsLabel),h("slot",null),h("div",{class:"left-arrow",onClick:function(){return t.scrollLeft()}},h("div",{class:"arrow"})),h("div",{class:"right-arrow",onClick:function(){return t.scrollRight()}},h("div",{class:"arrow"}))]},Object.defineProperty(t,"is",{get:function(){return"sdx-progress-full"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeStep:{state:!0},animated:{type:Boolean,attr:"animated"},el:{elementRef:!0},getActiveStep:{method:!0},nextStep:{method:!0},previousActiveStep:{state:!0},previousStep:{method:!0},setActiveStep:{method:!0},step:{type:Number,attr:"step",watchCallbacks:["stepChanged"]},stepChangeCallback:{type:String,attr:"step-change-callback",watchCallbacks:["stepChangeCallbackChanged"]},stepsLabel:{type:String,attr:"steps-label",watchCallbacks:["stepChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:resize",method:"onWindowResizeThrottled",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;position:relative;width:100%;padding:24px 0;text-align:center;display:inline-block;min-width:240px;outline:none;font-size:0;overflow:hidden;white-space:nowrap}\@media (min-width:768px){:host{padding:32px 0}}:host .info-content{padding-bottom:14px;line-height:24px;letter-spacing:.1px;font-size:10px;font-weight:400}:host(.hide-steps-label) .info-content{display:none}:host(.hide-steps-label) .left-arrow,:host(.hide-steps-label) .right-arrow{top:-5px}\@media (min-width:768px){:host(.hide-steps-label) .left-arrow,:host(.hide-steps-label) .right-arrow{top:3px}}:host(.hide-arrows) .left-arrow,:host(.hide-arrows) .right-arrow{display:none}:host .left-arrow,:host .right-arrow{top:33px}\@media (min-width:768px){:host .left-arrow,:host .right-arrow{top:41px}}.left-arrow,.right-arrow{position:absolute;height:80px;cursor:pointer}.left-arrow .arrow,.right-arrow .arrow{position:relative;-webkit-transform:rotate(90deg);transform:rotate(90deg);top:calc(50% - 16px);height:20px;width:20px;-webkit-transition:background .2s cubic-bezier(.4,0,.6,1);transition:background .2s cubic-bezier(.4,0,.6,1)}.left-arrow .arrow:after,.left-arrow .arrow:before,.right-arrow .arrow:after,.right-arrow .arrow:before{position:absolute;top:50%;-webkit-transition:all .2s cubic-bezier(.4,0,.2,1);transition:all .2s cubic-bezier(.4,0,.2,1);border-radius:3px;background:#1781e3;width:20px;height:3px;-webkit-backface-visibility:hidden;backface-visibility:hidden;content:\"\"}.left-arrow .arrow:before,.right-arrow .arrow:before{left:0}.left-arrow .arrow:after,.right-arrow .arrow:after{left:15px}.left-arrow.arrow--hidden,.right-arrow.arrow--hidden{cursor:default}.left-arrow.arrow--hidden .arrow,.right-arrow.arrow--hidden .arrow{display:none}.left-arrow:hover .arrow:after,.left-arrow:hover .arrow:before,.right-arrow:hover .arrow:after,.right-arrow:hover .arrow:before{background:#0851da}.left-arrow{left:0;background:-webkit-gradient(linear,left top,right top,from(#fff),color-stop(30%,#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 0,#fff 30%,hsla(0,0%,100%,0))}.left-arrow .arrow:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.left-arrow .arrow:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.right-arrow{right:0;background:-webkit-gradient(linear,right top,left top,from(#fff),color-stop(30%,#fff),to(hsla(0,0%,100%,0)));background:linear-gradient(270deg,#fff 0,#fff 30%,hsla(0,0%,100%,0))}.right-arrow .arrow{float:right}.right-arrow .arrow:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.right-arrow .arrow:after{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.left-arrow .arrow:before,.right-arrow .arrow:before{left:1px}.left-arrow .arrow:after,.right-arrow .arrow:after{left:14px}"},enumerable:!0,configurable:!0}),t}();export{ProgressFull as SdxProgressFull};