/*! Built with http://stenciljs.com */
import { h } from '../webcomponents.core.js';

class Button {
    constructor() {
        this.theme = "primary";
        this.size = "standard";
        this.srHint = "";
    }
    hostData() {
        return {
            class: {
                [this.theme]: true,
                [this.size]: true
            }
        };
    }
    render() {
        return (h("button", null,
            h("slot", null),
            h("span", { class: "sr-only" }, this.srHint)));
    }
    static get is() { return "sdx-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "size": {
            "type": String,
            "attr": "size"
        },
        "srHint": {
            "type": String,
            "attr": "sr-hint"
        },
        "theme": {
            "type": String,
            "attr": "theme"
        }
    }; }
    static get style() { return "\@charset \"UTF-8\";.sc-sdx-button-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-button, .sc-sdx-button:after, .sc-sdx-button:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sr-only.sc-sdx-button{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable.sc-sdx-button:active, .sr-only-focusable.sc-sdx-button:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}button.sc-sdx-button{font-family:TheSans,sans-serif;line-height:24px;letter-spacing:-.1px;font-size:18px;overflow:hidden;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;position:relative;-webkit-transition:all 70ms cubic-bezier(.4,0,.6,1);transition:all 70ms cubic-bezier(.4,0,.6,1);margin:0;outline:none;border:0;border-bottom-style:none;border-radius:5px;background:none;cursor:pointer;vertical-align:middle;text-align:center;text-decoration:none;text-shadow:0 0 0;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-color:#1781e3;background-color:#1781e3;color:#fff}button.sc-sdx-button:active{-webkit-transform:scale(.98);transform:scale(.98)}button.sc-sdx-button:active, button.sc-sdx-button:focus, button.sc-sdx-button:hover{border:0;border-bottom-style:none}button.disabled.sc-sdx-button, button.sc-sdx-button:disabled{cursor:not-allowed;pointer-events:none}button.sc-sdx-button:active, button.sc-sdx-button:focus, button.sc-sdx-button:hover{border-color:#0851da;background-color:#0851da;color:#fff}button.disabled.sc-sdx-button, button.sc-sdx-button:disabled{border-color:rgba(23,129,227,.4);background-color:rgba(23,129,227,.4);color:hsla(0,0%,100%,.6)}.sc-sdx-button-h{display:block}.primary.sc-sdx-button-h   button.sc-sdx-button{border-color:#1781e3;background-color:#1781e3;color:#fff}.primary.sc-sdx-button-h   button.sc-sdx-button:active, .primary.sc-sdx-button-h   button.sc-sdx-button:focus, .primary.sc-sdx-button-h   button.sc-sdx-button:hover{border-color:#0851da;background-color:#0851da;color:#fff}.primary.sc-sdx-button-h   button.disabled.sc-sdx-button, .primary.sc-sdx-button-h   button.sc-sdx-button:disabled{border-color:rgba(23,129,227,.4);background-color:rgba(23,129,227,.4);color:hsla(0,0%,100%,.6)}.secondary.sc-sdx-button-h   button.sc-sdx-button{border-color:#cfd5d9;background-color:#cfd5d9;color:#333}.secondary.sc-sdx-button-h   button.sc-sdx-button:active, .secondary.sc-sdx-button-h   button.sc-sdx-button:focus, .secondary.sc-sdx-button-h   button.sc-sdx-button:hover{border-color:#b1b9be;background-color:#b1b9be;color:#333}.secondary.sc-sdx-button-h   button.disabled.sc-sdx-button, .secondary.sc-sdx-button-h   button.sc-sdx-button:disabled{border-color:rgba(207,213,217,.4);background-color:rgba(207,213,217,.4);color:rgba(51,51,51,.4)}.confirm.sc-sdx-button-h   button.sc-sdx-button{border-color:#25b252;background-color:#25b252;color:#fff}.confirm.sc-sdx-button-h   button.sc-sdx-button:active, .confirm.sc-sdx-button-h   button.sc-sdx-button:focus, .confirm.sc-sdx-button-h   button.sc-sdx-button:hover{border-color:#008236;background-color:#008236;color:#fff}.confirm.sc-sdx-button-h   button.disabled.sc-sdx-button, .confirm.sc-sdx-button-h   button.sc-sdx-button:disabled{border-color:rgba(37,178,82,.4);background-color:rgba(37,178,82,.4);color:hsla(0,0%,100%,.6)}.transparent.sc-sdx-button-h   button.sc-sdx-button, .transparent.sc-sdx-button-h   button.sc-sdx-button:active, .transparent.sc-sdx-button-h   button.sc-sdx-button:focus, .transparent.sc-sdx-button-h   button.sc-sdx-button:hover{border-color:transparent;background-color:transparent;color:#333}.transparent.sc-sdx-button-h   button.disabled.sc-sdx-button, .transparent.sc-sdx-button-h   button.sc-sdx-button:disabled{border-color:rgba(0,0,0,.4);background-color:rgba(0,0,0,.4);color:rgba(51,51,51,.6)}.transparent.sc-sdx-button-h   button.sc-sdx-button:active, .transparent.sc-sdx-button-h   button.sc-sdx-button:focus, .transparent.sc-sdx-button-h   button.sc-sdx-button:hover{color:#0851da}.transparent.sc-sdx-button-h   button.sc-sdx-button:active{-webkit-transform:scale(1);transform:scale(1)}.standard.sc-sdx-button-h   button.sc-sdx-button{min-width:160px;padding:12px 24px}.icon.sc-sdx-button-h   button.sc-sdx-button{width:48px;height:48px;padding:12px}.transparent.sc-sdx-button-h   button.sc-sdx-button{min-width:auto;padding:0;margin:0}"; }
}

export { Button as SdxButton };
