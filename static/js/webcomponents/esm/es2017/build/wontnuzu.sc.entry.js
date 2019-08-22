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
    static get style() { return "\@charset \"UTF-8\";.sc-sdx-sticker-circle-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-sticker-circle, .sc-sdx-sticker-circle:after, .sc-sdx-sticker-circle:before{-webkit-box-sizing:inherit;box-sizing:inherit}.white.sc-sdx-sticker-circle{color:#fff}.navy.sc-sdx-sticker-circle{color:#015}.blue.sc-sdx-sticker-circle{color:#1781e3}.blue-40.sc-sdx-sticker-circle, .blue-tint-2.sc-sdx-sticker-circle{color:#a2cdf4}.blue-20.sc-sdx-sticker-circle, .blue-tint-3.sc-sdx-sticker-circle{color:#d1e6f9}.aluminium.sc-sdx-sticker-circle, .aluminum.sc-sdx-sticker-circle{color:#dde3e7}.aluminium-80.sc-sdx-sticker-circle, .aluminium-tint-2.sc-sdx-sticker-circle, .aluminum-80.sc-sdx-sticker-circle, .aluminum-tint-2.sc-sdx-sticker-circle{color:#e4e9ec}.horizon.sc-sdx-sticker-circle{color:#eef3f6}.horizon-40.sc-sdx-sticker-circle, .horizon-tint-2.sc-sdx-sticker-circle{color:#f8fafb}.gray.sc-sdx-sticker-circle{color:#333}.gray-90.sc-sdx-sticker-circle, .gray-tint-2.sc-sdx-sticker-circle{color:#474747}.gray-80.sc-sdx-sticker-circle, .gray-tint-3.sc-sdx-sticker-circle{color:#5c5c5c}.gray-mid.sc-sdx-sticker-circle, .gray-tint-4.sc-sdx-sticker-circle{color:#666}.gray-60.sc-sdx-sticker-circle, .gray-tint-5.sc-sdx-sticker-circle{color:#858585}.gray-40.sc-sdx-sticker-circle, .gray-tint-6.sc-sdx-sticker-circle{color:#adadad}.gray-light.sc-sdx-sticker-circle, .gray-tint-7.sc-sdx-sticker-circle{color:#bbb}.gray-20.sc-sdx-sticker-circle, .gray-tint-8.sc-sdx-sticker-circle{color:#d6d6d6}.sc-blue.sc-sdx-sticker-circle{color:#1af}.sc-red.sc-sdx-sticker-circle{color:#d12}.sc-purple.sc-sdx-sticker-circle{color:#5944c6}.sc-navy.sc-sdx-sticker-circle{color:#015}.sc-white.sc-sdx-sticker-circle{color:#fff}.sc-gray.sc-sdx-sticker-circle{color:#333}.sc-gray-mid.sc-sdx-sticker-circle{color:#666}.sc-gray-light.sc-sdx-sticker-circle{color:#bbb}.int-blue.sc-sdx-sticker-circle{color:#1781e3}.int-blue--active.sc-sdx-sticker-circle{color:#0851da}.int-gray.sc-sdx-sticker-circle{color:#cfd5d9}.int-gray--active.sc-sdx-sticker-circle{color:#b1b9be}.int-green.sc-sdx-sticker-circle{color:#25b252}.int-green--active.sc-sdx-sticker-circle{color:#008236}.int-red.sc-sdx-sticker-circle{color:#d12}.int-red--active.sc-sdx-sticker-circle{color:#be0000}.int-orange.sc-sdx-sticker-circle{color:#ff8b2e}.int-orange--active.sc-sdx-sticker-circle{color:#e86416}.azure.sc-sdx-sticker-circle{color:#1781e3}.azure--active.sc-sdx-sticker-circle{color:#0851da}.orchid.sc-sdx-sticker-circle{color:#a63297}.orchid--active.sc-sdx-sticker-circle{color:#7f2879}.orchid-tint-2.sc-sdx-sticker-circle{color:#ab449f}.orchid-tint-3.sc-sdx-sticker-circle{color:#b458a8}.orchid-tint-4.sc-sdx-sticker-circle{color:#bb6ab1}.orchid-tint-5.sc-sdx-sticker-circle{color:#c47fbb}.orchid-tint-6.sc-sdx-sticker-circle{color:#cb91c2}.orchid-tint-7.sc-sdx-sticker-circle{color:#d2a4cc}.orchid-tint-8.sc-sdx-sticker-circle{color:#dab7d5}.iris.sc-sdx-sticker-circle{color:#5944c6}.iris--active.sc-sdx-sticker-circle{color:#42389e}.iris-tint-2.sc-sdx-sticker-circle{color:#6754c8}.iris-tint-3.sc-sdx-sticker-circle{color:#7765ce}.iris-tint-4.sc-sdx-sticker-circle{color:#7177d2}.iris-tint-5.sc-sdx-sticker-circle{color:#9589d7}.iris-tint-6.sc-sdx-sticker-circle{color:#a59adb}.iris-tint-7.sc-sdx-sticker-circle{color:#b4abe0}.iris-tint-8.sc-sdx-sticker-circle{color:#c3bce2}.pink.sc-sdx-sticker-circle{color:#e61e64}.pink--active.sc-sdx-sticker-circle{color:#bf1b5a}.pink-tint-2.sc-sdx-sticker-circle{color:#e63a70}.pink-tint-3.sc-sdx-sticker-circle{color:#e74e7f}.pink-tint-4.sc-sdx-sticker-circle{color:#e8628d}.pink-tint-5.sc-sdx-sticker-circle{color:#ea779c}.pink-tint-6.sc-sdx-sticker-circle{color:#eb8baa}.pink-tint-7.sc-sdx-sticker-circle{color:#eca0b8}.pink-tint-8.sc-sdx-sticker-circle{color:#edb4c6}.apple.sc-sdx-sticker-circle, .petrol.sc-sdx-sticker-circle, .turquoise.sc-sdx-sticker-circle{color:#0eaba9}.apple--active.sc-sdx-sticker-circle, .petrol--active.sc-sdx-sticker-circle, .turquoise--active.sc-sdx-sticker-circle{color:#0c847e}.turquoise-tint-2.sc-sdx-sticker-circle{color:#21b1af}.turquoise-tint-3.sc-sdx-sticker-circle{color:#38b8b6}.turquoise-tint-4.sc-sdx-sticker-circle{color:#4cc0bd}.turquoise-tint-5.sc-sdx-sticker-circle{color:#67c7c5}.turquoise-tint-6.sc-sdx-sticker-circle{color:#7ececd}.turquoise-tint-7.sc-sdx-sticker-circle{color:#97d5d4}.turquoise-tint-8.sc-sdx-sticker-circle{color:#a9dbdb}.bg-white.sc-sdx-sticker-circle{background-color:#fff}.bg-navy.sc-sdx-sticker-circle{background-color:#015}.bg-blue.sc-sdx-sticker-circle{background-color:#1781e3}.bg-blue-40.sc-sdx-sticker-circle, .bg-blue-tint-2.sc-sdx-sticker-circle{background-color:#a2cdf4}.bg-blue-20.sc-sdx-sticker-circle, .bg-blue-tint-3.sc-sdx-sticker-circle{background-color:#d1e6f9}.bg-aluminium.sc-sdx-sticker-circle, .bg-aluminum.sc-sdx-sticker-circle{background-color:#dde3e7}.bg-aluminium-80.sc-sdx-sticker-circle, .bg-aluminium-tint-2.sc-sdx-sticker-circle, .bg-aluminum-80.sc-sdx-sticker-circle, .bg-aluminum-tint-2.sc-sdx-sticker-circle{background-color:#e4e9ec}.bg-horizon.sc-sdx-sticker-circle{background-color:#eef3f6}.bg-horizon-40.sc-sdx-sticker-circle, .bg-horizon-tint-2.sc-sdx-sticker-circle{background-color:#f8fafb}.bg-gray.sc-sdx-sticker-circle{background-color:#333}.bg-gray-90.sc-sdx-sticker-circle, .bg-gray-tint-2.sc-sdx-sticker-circle{background-color:#474747}.bg-gray-80.sc-sdx-sticker-circle, .bg-gray-tint-3.sc-sdx-sticker-circle{background-color:#5c5c5c}.bg-gray-mid.sc-sdx-sticker-circle, .bg-gray-tint-4.sc-sdx-sticker-circle{background-color:#666}.bg-gray-60.sc-sdx-sticker-circle, .bg-gray-tint-5.sc-sdx-sticker-circle{background-color:#858585}.bg-gray-40.sc-sdx-sticker-circle, .bg-gray-tint-6.sc-sdx-sticker-circle{background-color:#adadad}.bg-gray-light.sc-sdx-sticker-circle, .bg-gray-tint-7.sc-sdx-sticker-circle{background-color:#bbb}.bg-gray-20.sc-sdx-sticker-circle, .bg-gray-tint-8.sc-sdx-sticker-circle{background-color:#d6d6d6}.bg-sc-blue.sc-sdx-sticker-circle{background-color:#1af}.bg-sc-red.sc-sdx-sticker-circle{background-color:#d12}.bg-sc-navy.sc-sdx-sticker-circle{background-color:#015}.bg-sc-white.sc-sdx-sticker-circle{background-color:#fff}.bg-int-blue.sc-sdx-sticker-circle{background-color:#1781e3}.bg-int-blue--active.sc-sdx-sticker-circle{background-color:#0851da}.bg-int-gray.sc-sdx-sticker-circle{background-color:#cfd5d9}.bg-int-gray--active.sc-sdx-sticker-circle{background-color:#b1b9be}.bg-int-green.sc-sdx-sticker-circle{background-color:#25b252}.bg-int-green--active.sc-sdx-sticker-circle{background-color:#008236}.bg-int-red.sc-sdx-sticker-circle{background-color:#d12}.bg-int-red--active.sc-sdx-sticker-circle{background-color:#be0000}.bg-int-orange.sc-sdx-sticker-circle{background-color:#ff8b2e}.bg-int-orange--active.sc-sdx-sticker-circle{background-color:#e86416}.bg-azure.sc-sdx-sticker-circle{background-color:#1781e3}.bg-azure--active.sc-sdx-sticker-circle{background-color:#0851da}.bg-orchid.sc-sdx-sticker-circle{background-color:#a63297}.bg-orchid--active.sc-sdx-sticker-circle{background-color:#7f2879}.bg-iris.sc-sdx-sticker-circle{background-color:#5944c6}.bg-iris--active.sc-sdx-sticker-circle{background-color:#42389e}.bg-pink.sc-sdx-sticker-circle{background-color:#e61e64}.bg-pink--active.sc-sdx-sticker-circle{background-color:#bf1b5a}.bg-apple.sc-sdx-sticker-circle, .bg-petrol.sc-sdx-sticker-circle, .bg-turquoise.sc-sdx-sticker-circle{background-color:#0eaba9}.bg-apple--active.sc-sdx-sticker-circle, .bg-petrol--active.sc-sdx-sticker-circle, .bg-turquoise--active.sc-sdx-sticker-circle{background-color:#0c847e}.sr-only.sc-sdx-sticker-circle{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable.sc-sdx-sticker-circle:active, .sr-only-focusable.sc-sdx-sticker-circle:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.wrapper.sc-sdx-sticker-circle{position:relative}.wrapper.sc-sdx-sticker-circle   .sticker.sc-sdx-sticker-circle{position:absolute;overflow:hidden;border:1px solid;border-radius:50%;white-space:nowrap;pointer-events:none}.wrapper.sc-sdx-sticker-circle   .sticker.sc-sdx-sticker-circle   .inner.sc-sdx-sticker-circle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;overflow:hidden}.wrapper .slot .sc-sdx-sticker-circle-s > img{display:block}"; }
}

export { StickerCircle as SdxStickerCircle };
