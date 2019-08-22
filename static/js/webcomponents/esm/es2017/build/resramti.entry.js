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
    static get style() { return "\@charset \"UTF-8\";:host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}button{font-family:TheSans,sans-serif;line-height:24px;letter-spacing:-.1px;font-size:18px;overflow:hidden;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;position:relative;-webkit-transition:all 70ms cubic-bezier(.4,0,.6,1);transition:all 70ms cubic-bezier(.4,0,.6,1);margin:0;outline:none;border:0;border-bottom-style:none;border-radius:5px;background:none;cursor:pointer;vertical-align:middle;text-align:center;text-decoration:none;text-shadow:0 0 0;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-color:#1781e3;background-color:#1781e3;color:#fff}button:active{-webkit-transform:scale(.98);transform:scale(.98)}button:active,button:focus,button:hover{border:0;border-bottom-style:none}button.disabled,button:disabled{cursor:not-allowed;pointer-events:none}button:active,button:focus,button:hover{border-color:#0851da;background-color:#0851da;color:#fff}button.disabled,button:disabled{border-color:rgba(23,129,227,.4);background-color:rgba(23,129,227,.4);color:hsla(0,0%,100%,.6)}:host{display:block}:host(.primary) button{border-color:#1781e3;background-color:#1781e3;color:#fff}:host(.primary) button:active,:host(.primary) button:focus,:host(.primary) button:hover{border-color:#0851da;background-color:#0851da;color:#fff}:host(.primary) button.disabled,:host(.primary) button:disabled{border-color:rgba(23,129,227,.4);background-color:rgba(23,129,227,.4);color:hsla(0,0%,100%,.6)}:host(.secondary) button{border-color:#cfd5d9;background-color:#cfd5d9;color:#333}:host(.secondary) button:active,:host(.secondary) button:focus,:host(.secondary) button:hover{border-color:#b1b9be;background-color:#b1b9be;color:#333}:host(.secondary) button.disabled,:host(.secondary) button:disabled{border-color:rgba(207,213,217,.4);background-color:rgba(207,213,217,.4);color:rgba(51,51,51,.4)}:host(.confirm) button{border-color:#25b252;background-color:#25b252;color:#fff}:host(.confirm) button:active,:host(.confirm) button:focus,:host(.confirm) button:hover{border-color:#008236;background-color:#008236;color:#fff}:host(.confirm) button.disabled,:host(.confirm) button:disabled{border-color:rgba(37,178,82,.4);background-color:rgba(37,178,82,.4);color:hsla(0,0%,100%,.6)}:host(.transparent) button,:host(.transparent) button:active,:host(.transparent) button:focus,:host(.transparent) button:hover{border-color:transparent;background-color:transparent;color:#333}:host(.transparent) button.disabled,:host(.transparent) button:disabled{border-color:rgba(0,0,0,.4);background-color:rgba(0,0,0,.4);color:rgba(51,51,51,.6)}:host(.transparent) button:active,:host(.transparent) button:focus,:host(.transparent) button:hover{color:#0851da}:host(.transparent) button:active{-webkit-transform:scale(1);transform:scale(1)}:host(.standard) button{min-width:160px;padding:12px 24px}:host(.icon) button{width:48px;height:48px;padding:12px}:host(.transparent) button{min-width:auto;padding:0;margin:0}"; }
}

export { Button as SdxButton };
