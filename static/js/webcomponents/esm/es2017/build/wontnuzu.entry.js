/*! Built with http://stenciljs.com */
import { h } from '../webcomponents.core.js';

const padding = 16;
class StickerCircle {
    constructor() {
        this.size = 112;
        this.colorClass = "sc-white";
        this.bgColorClass = "orchid";
        this.srHint = "";
    }
    onWindowResizeThrottled() {
        if (this.resizeTimer) {
            clearTimeout(this.resizeTimer);
        }
        this.resizeTimer = setTimeout(() => {
            this.resize();
        }, 10);
    }
    componentDidLoad() {
        this.resize();
    }
    resize() {
        if (this.wrapperEl && this.stickerEl && this.contentWidth) {
            this.stickerEl.style.transform = `scale(${this.wrapperEl.clientWidth / this.contentWidth})`;
        }
    }
    getClasses() {
        return {
            sticker: true,
            [this.colorClass]: true,
            [`bg-${this.bgColorClass}`]: true
        };
    }
    getStyles() {
        const isScalingEnabled = this.contentWidth !== undefined;
        return {
            sticker: {
                width: `${this.size}px`,
                height: `${this.size}px`,
                top: `${this.top}%`,
                bottom: `${this.bottom}%`,
                left: `${this.left}%`,
                right: `${this.right}%`,
                transformOrigin: `${this.top !== undefined ? "top" : "bottom"} ${this.left !== undefined ? "left" : "right"}`
            },
            inner: {
                maxWidth: `${this.size - 2 * padding}px`,
                maxHeight: `${this.size - 2 * padding}px`
            },
            slot: {
                minWidth: `${isScalingEnabled ? 0 : this.size}px`,
                minHeight: `${isScalingEnabled ? 0 : this.size}px`
            }
        };
    }
    render() {
        return [
            h("div", { class: "wrapper", ref: (el) => this.wrapperEl = el },
                h("div", { class: this.getClasses(), style: this.getStyles().sticker, ref: (el) => this.stickerEl = el },
                    h("div", { class: "inner", style: this.getStyles().inner, "aria-hidden": "true" },
                        h("slot", { name: "text" },
                            h("p", null, "TEXT")))),
                h("div", { class: "slot", style: this.getStyles().slot },
                    h("slot", null))),
            h("span", { class: "sr-only" }, this.srHint)
        ];
    }
    static get is() { return "sdx-sticker-circle"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "bgColorClass": {
            "type": String,
            "attr": "bg-color-class"
        },
        "bottom": {
            "type": Number,
            "attr": "bottom"
        },
        "colorClass": {
            "type": String,
            "attr": "color-class"
        },
        "contentWidth": {
            "type": Number,
            "attr": "content-width"
        },
        "left": {
            "type": Number,
            "attr": "left"
        },
        "right": {
            "type": Number,
            "attr": "right"
        },
        "size": {
            "type": Number,
            "attr": "size"
        },
        "srHint": {
            "type": String,
            "attr": "sr-hint"
        },
        "top": {
            "type": Number,
            "attr": "top"
        }
    }; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "onWindowResizeThrottled",
            "passive": true
        }]; }
    static get style() { return "\@charset \"UTF-8\";:host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.white{color:#fff}.navy{color:#015}.blue{color:#1781e3}.blue-40,.blue-tint-2{color:#a2cdf4}.blue-20,.blue-tint-3{color:#d1e6f9}.aluminium,.aluminum{color:#dde3e7}.aluminium-80,.aluminium-tint-2,.aluminum-80,.aluminum-tint-2{color:#e4e9ec}.horizon{color:#eef3f6}.horizon-40,.horizon-tint-2{color:#f8fafb}.gray{color:#333}.gray-90,.gray-tint-2{color:#474747}.gray-80,.gray-tint-3{color:#5c5c5c}.gray-mid,.gray-tint-4{color:#666}.gray-60,.gray-tint-5{color:#858585}.gray-40,.gray-tint-6{color:#adadad}.gray-light,.gray-tint-7{color:#bbb}.gray-20,.gray-tint-8{color:#d6d6d6}.sc-blue{color:#1af}.sc-red{color:#d12}.sc-purple{color:#5944c6}.sc-navy{color:#015}.sc-white{color:#fff}.sc-gray{color:#333}.sc-gray-mid{color:#666}.sc-gray-light{color:#bbb}.int-blue{color:#1781e3}.int-blue--active{color:#0851da}.int-gray{color:#cfd5d9}.int-gray--active{color:#b1b9be}.int-green{color:#25b252}.int-green--active{color:#008236}.int-red{color:#d12}.int-red--active{color:#be0000}.int-orange{color:#ff8b2e}.int-orange--active{color:#e86416}.azure{color:#1781e3}.azure--active{color:#0851da}.orchid{color:#a63297}.orchid--active{color:#7f2879}.orchid-tint-2{color:#ab449f}.orchid-tint-3{color:#b458a8}.orchid-tint-4{color:#bb6ab1}.orchid-tint-5{color:#c47fbb}.orchid-tint-6{color:#cb91c2}.orchid-tint-7{color:#d2a4cc}.orchid-tint-8{color:#dab7d5}.iris{color:#5944c6}.iris--active{color:#42389e}.iris-tint-2{color:#6754c8}.iris-tint-3{color:#7765ce}.iris-tint-4{color:#7177d2}.iris-tint-5{color:#9589d7}.iris-tint-6{color:#a59adb}.iris-tint-7{color:#b4abe0}.iris-tint-8{color:#c3bce2}.pink{color:#e61e64}.pink--active{color:#bf1b5a}.pink-tint-2{color:#e63a70}.pink-tint-3{color:#e74e7f}.pink-tint-4{color:#e8628d}.pink-tint-5{color:#ea779c}.pink-tint-6{color:#eb8baa}.pink-tint-7{color:#eca0b8}.pink-tint-8{color:#edb4c6}.apple,.petrol,.turquoise{color:#0eaba9}.apple--active,.petrol--active,.turquoise--active{color:#0c847e}.turquoise-tint-2{color:#21b1af}.turquoise-tint-3{color:#38b8b6}.turquoise-tint-4{color:#4cc0bd}.turquoise-tint-5{color:#67c7c5}.turquoise-tint-6{color:#7ececd}.turquoise-tint-7{color:#97d5d4}.turquoise-tint-8{color:#a9dbdb}.bg-white{background-color:#fff}.bg-navy{background-color:#015}.bg-blue{background-color:#1781e3}.bg-blue-40,.bg-blue-tint-2{background-color:#a2cdf4}.bg-blue-20,.bg-blue-tint-3{background-color:#d1e6f9}.bg-aluminium,.bg-aluminum{background-color:#dde3e7}.bg-aluminium-80,.bg-aluminium-tint-2,.bg-aluminum-80,.bg-aluminum-tint-2{background-color:#e4e9ec}.bg-horizon{background-color:#eef3f6}.bg-horizon-40,.bg-horizon-tint-2{background-color:#f8fafb}.bg-gray{background-color:#333}.bg-gray-90,.bg-gray-tint-2{background-color:#474747}.bg-gray-80,.bg-gray-tint-3{background-color:#5c5c5c}.bg-gray-mid,.bg-gray-tint-4{background-color:#666}.bg-gray-60,.bg-gray-tint-5{background-color:#858585}.bg-gray-40,.bg-gray-tint-6{background-color:#adadad}.bg-gray-light,.bg-gray-tint-7{background-color:#bbb}.bg-gray-20,.bg-gray-tint-8{background-color:#d6d6d6}.bg-sc-blue{background-color:#1af}.bg-sc-red{background-color:#d12}.bg-sc-navy{background-color:#015}.bg-sc-white{background-color:#fff}.bg-int-blue{background-color:#1781e3}.bg-int-blue--active{background-color:#0851da}.bg-int-gray{background-color:#cfd5d9}.bg-int-gray--active{background-color:#b1b9be}.bg-int-green{background-color:#25b252}.bg-int-green--active{background-color:#008236}.bg-int-red{background-color:#d12}.bg-int-red--active{background-color:#be0000}.bg-int-orange{background-color:#ff8b2e}.bg-int-orange--active{background-color:#e86416}.bg-azure{background-color:#1781e3}.bg-azure--active{background-color:#0851da}.bg-orchid{background-color:#a63297}.bg-orchid--active{background-color:#7f2879}.bg-iris{background-color:#5944c6}.bg-iris--active{background-color:#42389e}.bg-pink{background-color:#e61e64}.bg-pink--active{background-color:#bf1b5a}.bg-apple,.bg-petrol,.bg-turquoise{background-color:#0eaba9}.bg-apple--active,.bg-petrol--active,.bg-turquoise--active{background-color:#0c847e}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.wrapper{position:relative}.wrapper .sticker{position:absolute;overflow:hidden;border:1px solid;border-radius:50%;white-space:nowrap;pointer-events:none}.wrapper .sticker .inner{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;overflow:hidden}.wrapper .slot ::slotted(img){display:block}"; }
}

export { StickerCircle as SdxStickerCircle };
