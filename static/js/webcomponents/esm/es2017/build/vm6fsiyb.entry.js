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
    static get style() { return ":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;position:relative}:host(.loop)>.wrapper>.ribbon-container{position:absolute;overflow:hidden;top:-5px}:host(.loop)>.wrapper>.ribbon-container .content{color:#fff;background-color:#a63297;text-align:center;-webkit-box-shadow:0 -1px 3px #333;box-shadow:0 -1px 3px #333;position:absolute;width:calc(100% * 1.414);-webkit-transform-origin:bottom left;-moz-transform-origin:bottom left;-ms-transform-origin:bottom left;-o-transform-origin:bottom left;transform-origin:bottom left}:host(.loop)>.wrapper>.ribbon-container .content:after,:host(.loop)>.wrapper>.ribbon-container .content:before{content:\"\";position:absolute;bottom:-4px;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #7f2879}:host(.loop)>.wrapper>.ribbon-container .content:before{left:0}:host(.loop)>.wrapper>.ribbon-container .content:after{right:0}:host(.small)>.wrapper>.slot{min-height:96px}:host(.normal)>.wrapper>.slot{min-height:112px}:host(.large)>.wrapper>.slot{min-height:128px}:host(.loop.small)>.wrapper>.ribbon-container{font-size:14px;width:96px;height:96px}:host(.loop.normal)>.wrapper>.ribbon-container{font-size:16px;width:112px;height:112px}:host(.loop.large)>.wrapper>.ribbon-container{font-size:18px;width:128px;height:128px}:host(.loop.left)>.wrapper>.ribbon-container{left:-5px}:host(.loop.left)>.wrapper>.ribbon-container .content{-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);bottom:0}:host(.loop.right)>.wrapper>.ribbon-container{right:-5px}:host(.loop.right)>.wrapper>.ribbon-container .content{top:-24px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg)}:host(.bookmark)>.wrapper>.ribbon-container{position:absolute;top:6px;min-width:70px;background-color:#0eaba9;color:#fff}:host(.bookmark)>.wrapper>.ribbon-container:after{content:\"\";position:absolute;bottom:-8px;border-top:8px solid #0c847e}:host(.bookmark.right)>.wrapper>.ribbon-container{right:-8px}:host(.bookmark.right)>.wrapper>.ribbon-container:after{right:0;border-right:8px solid transparent}:host(.bookmark.left)>.wrapper>.ribbon-container{left:-8px}:host(.bookmark.left)>.wrapper>.ribbon-container:after{left:0;border-left:8px solid transparent}:host(.bookmark.small)>.wrapper>.ribbon-container{font-size:14px;padding:4px 8px}:host(.bookmark.normal)>.wrapper>.ribbon-container{font-size:16px;padding:6px 8px}:host(.bookmark.large)>.wrapper>.ribbon-container{font-size:18px;padding:8px}"; }
}

export { Ribbon as SdxRibbon };
