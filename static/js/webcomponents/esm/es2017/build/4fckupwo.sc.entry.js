/*! Built with http://stenciljs.com */
import { h } from '../webcomponents.core.js';

import { a as getSlot, b as installSlotObserver, c as isNativeSlot, d as getAllSlotChildNodes, e as parseFunction, f as closest, g as getPreviousFromList, h as getNextFromList } from './chunk-c2033b1f.js';

class ProgressFullStep {
    constructor() {
        this.invokeStepClickCallback = () => null;
        this.value = 0;
        this.status = "none";
        this.position = "none";
    }
    stepClickCallbackChanged() {
        this.setInvokeStepClickCallback();
    }
    componentWillLoad() {
        this.setInvokeStepClickCallback();
    }
    clicked() {
        if (this.status === "completed") {
            this.invokeStepClickCallback();
        }
    }
    setInvokeStepClickCallback() {
        this.invokeStepClickCallback = parseFunction(this.stepClickCallback);
    }
    render() {
        return (h("div", { class: "step-container" },
            h("div", { class: "progress-line-right" }),
            h("div", { class: "progress-line-left" }),
            h("div", { class: "button-container" },
                h("button", { onClick: () => this.clicked() }, this.value)),
            h("br", { class: "br-hide" }),
            h("div", { onClick: () => this.clicked(), class: "progress-content" },
                h("slot", null))));
    }
    static get is() { return "sdx-progress-full-step"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "status": {
            "type": String,
            "attr": "status"
        },
        "stepClickCallback": {
            "type": String,
            "attr": "step-click-callback",
            "watchCallbacks": ["stepClickCallbackChanged"]
        },
        "value": {
            "type": Number,
            "attr": "value"
        }
    }; }
    static get style() { return ".sc-sdx-progress-full-step-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-progress-full-step, .sc-sdx-progress-full-step:after, .sc-sdx-progress-full-step:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-sdx-progress-full-step-h   .step-container.sc-sdx-progress-full-step{position:relative}[position=first].sc-sdx-progress-full-step-h   .progress-line-right.sc-sdx-progress-full-step, [position^=middle].sc-sdx-progress-full-step-h   .progress-line-right.sc-sdx-progress-full-step{-webkit-transition:all .2s ease;transition:all .2s ease;width:35%;height:1px;position:absolute;top:12px;right:0}[position=last].sc-sdx-progress-full-step-h   .progress-line-left.sc-sdx-progress-full-step, [position^=middle].sc-sdx-progress-full-step-h   .progress-line-left.sc-sdx-progress-full-step{-webkit-transition:all .2s ease;transition:all .2s ease;width:35%;height:1px;position:absolute;top:12px;left:0}.sc-sdx-progress-full-step-h{display:inline-block;overflow:hidden;vertical-align:top}.sc-sdx-progress-full-step-h   br.br-hide.sc-sdx-progress-full-step{visibility:hidden}.sc-sdx-progress-full-step-h   button.sc-sdx-progress-full-step{border:1px solid #1781e3;color:#1781e3;border-radius:100%;width:24px;height:24px;outline:none;background-color:transparent;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;line-height:normal;font-family:inherit}.sc-sdx-progress-full-step-h   .progress-content.sc-sdx-progress-full-step, .sc-sdx-progress-full-step-h   button.sc-sdx-progress-full-step{cursor:default;letter-spacing:normal;text-align:center;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.sc-sdx-progress-full-step-h   .progress-content.sc-sdx-progress-full-step{font-weight:400;font-size:16px;word-wrap:break-word;white-space:normal}.sc-sdx-progress-full-step-h   .button-container.sc-sdx-progress-full-step   button.sc-sdx-progress-full-step{font-weight:600;display:-ms-inline-flexbox;display:inline-flex;font-size:14px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0}[status=active].sc-sdx-progress-full-step-h   button.sc-sdx-progress-full-step{color:#fff;border-color:#1781e3;background-color:#1781e3}[status=active].sc-sdx-progress-full-step-h   button.sc-sdx-progress-full-step:hover{color:#fff;border-color:#0851da;background-color:#0851da}[status=completed].sc-sdx-progress-full-step-h   .progress-content.sc-sdx-progress-full-step, [status=completed].sc-sdx-progress-full-step-h   button.sc-sdx-progress-full-step{cursor:pointer}[status=completed].sc-sdx-progress-full-step-h   button.sc-sdx-progress-full-step{color:#fff;border-color:#25b252;background-color:#25b252}[status=completed].sc-sdx-progress-full-step-h   button.sc-sdx-progress-full-step:hover{color:#fff;border-color:#008236;background-color:#008236}.sc-sdx-progress-full-step-h   .progress-line-left.sc-sdx-progress-full-step, .sc-sdx-progress-full-step-h   .progress-line-right.sc-sdx-progress-full-step{background:#adadad}[position=first].sc-sdx-progress-full-step-h   .progress-line-left.sc-sdx-progress-full-step, [position=last].sc-sdx-progress-full-step-h   .progress-line-right.sc-sdx-progress-full-step{background:none}[status=active].sc-sdx-progress-full-step-h   .progress-line-left.sc-sdx-progress-full-step, [status=completed].sc-sdx-progress-full-step-h   .progress-line-left.sc-sdx-progress-full-step, [status=completed].sc-sdx-progress-full-step-h   .progress-line-right.sc-sdx-progress-full-step{background:#25b252}"; }
}

export { ProgressFullStep as SdxProgressFullStep };
