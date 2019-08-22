/*! Built with http://stenciljs.com */
import { h } from '../webcomponents.core.js';

class Ribbon {
    constructor() {
        this.label = "Ribbon";
        this.design = "loop";
        this.position = "right";
        this.size = "normal";
    }
    hostData() {
        return {
            class: {
                [this.design]: true,
                [this.position]: true,
                [this.size]: true
            }
        };
    }
    render() {
        return (h("div", { class: "wrapper" },
            h("div", { class: "slot" },
                h("slot", null)),
            h("div", { class: "ribbon-container" }, this.design === "loop"
                ? (h("div", { class: "content" }, this.label))
                : (this.label))));
    }
    static get is() { return "sdx-ribbon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "design": {
            "type": String,
            "attr": "design"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "size": {
            "type": String,
            "attr": "size"
        }
    }; }
    static get style() { return ".sc-sdx-ribbon-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-ribbon, .sc-sdx-ribbon:after, .sc-sdx-ribbon:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-sdx-ribbon-h{display:block;position:relative}.loop.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{position:absolute;overflow:hidden;top:-5px}.loop.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon   .content.sc-sdx-ribbon{color:#fff;background-color:#a63297;text-align:center;-webkit-box-shadow:0 -1px 3px #333;box-shadow:0 -1px 3px #333;position:absolute;width:calc(100% * 1.414);-webkit-transform-origin:bottom left;-moz-transform-origin:bottom left;-ms-transform-origin:bottom left;-o-transform-origin:bottom left;transform-origin:bottom left}.loop.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon   .content.sc-sdx-ribbon:after, .loop.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon   .content.sc-sdx-ribbon:before{content:\"\";position:absolute;bottom:-4px;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #7f2879}.loop.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon   .content.sc-sdx-ribbon:before{left:0}.loop.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon   .content.sc-sdx-ribbon:after{right:0}.small.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .slot.sc-sdx-ribbon{min-height:96px}.normal.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .slot.sc-sdx-ribbon{min-height:112px}.large.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .slot.sc-sdx-ribbon{min-height:128px}.loop.small.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{font-size:14px;width:96px;height:96px}.loop.normal.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{font-size:16px;width:112px;height:112px}.loop.large.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{font-size:18px;width:128px;height:128px}.loop.left.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{left:-5px}.loop.left.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon   .content.sc-sdx-ribbon{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);bottom:0}.loop.right.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{right:-5px}.loop.right.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon   .content.sc-sdx-ribbon{top:-24px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}.bookmark.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{position:absolute;top:6px;min-width:70px;background-color:#0eaba9;color:#fff}.bookmark.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon:after{content:\"\";position:absolute;bottom:-8px;border-top:8px solid #0c847e}.bookmark.right.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{right:-8px}.bookmark.right.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon:after{right:0;border-right:8px solid transparent}.bookmark.left.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{left:-8px}.bookmark.left.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon:after{left:0;border-left:8px solid transparent}.bookmark.small.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{font-size:14px;padding:4px 8px}.bookmark.normal.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{font-size:16px;padding:6px 8px}.bookmark.large.sc-sdx-ribbon-h > .wrapper.sc-sdx-ribbon > .ribbon-container.sc-sdx-ribbon{font-size:18px;padding:8px}"; }
}

export { Ribbon as SdxRibbon };
