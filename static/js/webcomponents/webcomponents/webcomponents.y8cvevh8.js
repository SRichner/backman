/*! Built with http://stenciljs.com */
(function(window,document,Context,namespace,hydratedCssClass,components,resourcesUrl){"use strict";
(function(s){s&&(resourcesUrl=s.getAttribute('data-resources-url'))})(document.querySelector("script[data-namespace='webcomponents']"));
function t(t,e){return"sc-"+t.t+(e&&e!==j?"-"+e:"")}function e(t,e){return t+(e?"-h":"-s")}function n(e,n,o,i){let c=o.t+i.mode,r=o[c];if((2===o.e||1===o.e&&!e.o.n)&&(i["s-sc"]=r?t(o,i.mode):t(o)),r||(r=o[c=o.t+j]),r){let t=n.i.head;if(n.n)if(1===o.e)t=i.shadowRoot;else{let e=i;for(;e=n.c(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}}let f=e.r.get(t);if(f||e.r.set(t,f={}),!f[c]){let e;{e=r.content.cloneNode(!0),f[c]=!0;const o=t.querySelectorAll("[data-styles]");n.f(t,e,o.length&&o[o.length-1].nextSibling||t.firstChild)}}}}function o(t,e,n,o,r,f,s){if("class"!==n||f)if("style"===n){for(const t in o)r&&null!=r[t]||(/-/.test(t)?e.style.removeProperty(t):e.style[t]="");for(const t in r)o&&r[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,r[t]):e.style[t]=r[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!f&&(n in e||-1!==["object","function"].indexOf(typeof r)&&null!==r)){const o=t.s(e);o&&o.l&&o.l[n]?c(e,n,r):"ref"!==n&&(c(e,n,null==r?"":r),null!=r&&!1!==r||t.o.u(e,n))}else null!=r&&"key"!==n?function l(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(S,E(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(S,E(e),n):t.setAttribute(e,n))}(e,n,r):(f||t.o.a(e,n)&&(null==r||!1===r))&&t.o.u(e,n);else n=E(n)in e?E(n.substring(2)):E(n[2])+n.substring(3),r?r!==o&&t.o.p(e,n,r):t.o.d(e,n);else if(o!==r){const t=i(o),n=i(r),c=t.filter(t=>!n.includes(t)),f=i(e.className).filter(t=>!c.includes(t)),s=n.filter(e=>!t.includes(e)&&!f.includes(e));f.push(...s),e.className=f.join(" ")}}function i(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function c(t,e,n){try{t[e]=n}catch(t){}}function r(t,e,n,i,c){const r=11===n.v.nodeType&&n.v.host?n.v.host:n.v,f=e&&e.vattrs||x,s=n.vattrs||x;for(c in f)s&&null!=s[c]||null==f[c]||o(t,r,c,f[c],void 0,i,n.m);for(c in s)c in f&&s[c]===("value"===c||"checked"===c?r[c]:f[c])||o(t,r,c,f[c],s[c],i,n.m)}function f(t,e){function n(i,c,f,s,l,p,b,h,w){if(h=c.vchildren[f],u||(d=!0,"slot"===h.vtag&&(a&&e.y(s,a+"-s"),h.vchildren?h.b=!0:h.w=!0)),W(h.vtext))h.v=e.g(h.vtext);else if(h.w)h.v=e.g("");else{if(p=h.v=A||"svg"===h.vtag?e.M("http://www.w3.org/2000/svg",h.vtag):e.k(h.b?"slot-fb":h.vtag),t.C(p)&&t.j.delete(y),A="svg"===h.vtag||"foreignObject"!==h.vtag&&A,r(t,null,h,A),W(a)&&p["s-si"]!==a&&e.y(p,p["s-si"]=a),h.vchildren)for(l=0;l<h.vchildren.length;++l)(b=n(i,h,l,p))&&e.x(p,b);"svg"===h.vtag&&(A=!1)}return h.v["s-hn"]=m,(h.b||h.w)&&(h.v["s-sr"]=!0,h.v["s-cr"]=v,h.v["s-sn"]=h.vname||"",(w=i&&i.vchildren&&i.vchildren[f])&&w.vtag===h.vtag&&i.v&&o(i.v)),h.v}function o(n,i,c,r){t.O=!0;const f=e.W(n);for(c=f.length-1;c>=0;c--)(r=f[c])["s-hn"]!==m&&r["s-ol"]&&(e.N(r),e.f(l(r),r,s(r)),e.N(r["s-ol"]),r["s-ol"]=null,d=!0),i&&o(r,i);t.O=!1}function i(t,o,i,c,r,f,l,u){const a=t["s-cr"];for((l=a&&e.c(a)||t).shadowRoot&&e.S(l)===m&&(l=l.shadowRoot);r<=f;++r)c[r]&&(u=W(c[r].vtext)?e.g(c[r].vtext):n(null,i,r,t))&&(c[r].v=u,e.f(l,u,s(o)))}function c(t,n,i,c){for(;n<=i;++n)W(t[n])&&(c=t[n].v,p=!0,c["s-ol"]?e.N(c["s-ol"]):o(c,!0),e.N(c))}function f(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function s(t){return t&&t["s-ol"]?t["s-ol"]:t}function l(t){return e.c(t["s-ol"]?t["s-ol"]:t)}let u,a,p,d,v,m,y;const b=[];return function h(w,g,$,M,k,C,j,x,O,E,N,S){if(y=w,m=e.S(y),v=y["s-cr"],u=M,a=y["s-sc"],d=p=!1,function u(a,p,d){const v=p.v=a.v,m=a.vchildren,y=p.vchildren;A=p.v&&W(e.A(p.v))&&void 0!==p.v.ownerSVGElement,A="svg"===p.vtag||"foreignObject"!==p.vtag&&A,W(p.vtext)?(d=v["s-cr"])?e.R(e.c(d),p.vtext):a.vtext!==p.vtext&&e.R(v,p.vtext):("slot"!==p.vtag&&r(t,a,p,A),W(m)&&W(y)?function b(t,r,a,p,d,v,m,y){let b=0,h=0,w=r.length-1,g=r[0],$=r[w],M=p.length-1,k=p[0],C=p[M];for(;b<=w&&h<=M;)if(null==g)g=r[++b];else if(null==$)$=r[--w];else if(null==k)k=p[++h];else if(null==C)C=p[--M];else if(f(g,k))u(g,k),g=r[++b],k=p[++h];else if(f($,C))u($,C),$=r[--w],C=p[--M];else if(f(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.c(g.v)),u(g,C),e.f(t,g.v,e.T($.v)),g=r[++b],C=p[--M];else if(f($,k))"slot"!==g.vtag&&"slot"!==C.vtag||o(e.c($.v)),u($,k),e.f(t,$.v,g.v),$=r[--w],k=p[++h];else{for(d=null,v=b;v<=w;++v)if(r[v]&&W(r[v].vkey)&&r[v].vkey===k.vkey){d=v;break}W(d)?((y=r[d]).vtag!==k.vtag?m=n(r&&r[h],a,d,t):(u(y,k),r[d]=void 0,m=y.v),k=p[++h]):(m=n(r&&r[h],a,h,t),k=p[++h]),m&&e.f(l(g.v),m,s(g.v))}b>w?i(t,null==p[M+1]?null:p[M+1].v,a,p,h,M):h>M&&c(r,b,w)}(v,m,p,y):W(y)?(W(a.vtext)&&e.R(v,""),i(v,null,p,y,0,y.length-1)):W(m)&&c(m,0,m.length-1)),A&&"svg"===p.vtag&&(A=!1)}(g,$),d){for(function t(n,o,i,c,r,f,s,l,u,a){for(r=0,f=(o=e.W(n)).length;r<f;r++){if((i=o[r])["s-sr"]&&(c=i["s-cr"]))for(l=e.W(e.c(c)),u=i["s-sn"],s=l.length-1;s>=0;s--)(c=l[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(a=e.L(c))||8===a)&&""===u||1===a&&null===e.D(c,"slot")&&""===u||1===a&&e.D(c,"slot")===u)&&(b.some(t=>t.P===c)||(p=!0,c["s-sn"]=u,b.push({q:i,P:c})));1===e.L(i)&&t(i)}}($.v),j=0;j<b.length;j++)(x=b[j]).P["s-ol"]||((O=e.g(""))["s-nr"]=x.P,e.f(e.c(x.P),x.P["s-ol"]=O,x.P));for(t.O=!0,j=0;j<b.length;j++){for(x=b[j],N=e.c(x.q),S=e.T(x.q),O=x.P["s-ol"];O=e.B(O);)if((E=O["s-nr"])&&E&&E["s-sn"]===x.P["s-sn"]&&N===e.c(E)&&(E=e.T(E))&&E&&!E["s-nr"]){S=E;break}(!S&&N!==e.c(x.P)||e.T(x.P)!==S)&&x.P!==S&&(e.N(x.P),e.f(N,x.P,S))}t.O=!1}return p&&function t(n,o,i,c,r,f,s,l){for(c=0,r=(i=e.W(n)).length;c<r;c++)if(o=i[c],1===e.L(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,f=0;f<r;f++)if(i[f]["s-hn"]!==o["s-hn"])if(l=e.L(i[f]),""!==s){if(1===l&&s===e.D(i[f],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.I(i[f]).trim()){o.hidden=!0;break}t(o)}}($.v),b.length=0,$}}function s(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.v),t.vchildren&&t.vchildren.forEach(t=>{s(t,e)}))}function l(t,e,n,o,i){const c=t.L(e);let r,f,s,u;if(i&&1===c){(f=t.D(e,C))&&(s=f.split("."))[0]===o&&((u={}).vtag=t.S(u.v=e),n.vchildren||(n.vchildren=[]),n.vchildren[s[1]]=u,n=u,i=""!==s[2]);for(let c=0;c<e.childNodes.length;c++)l(t,e.childNodes[c],n,o,i)}else 3===c&&(r=e.previousSibling)&&8===t.L(r)&&"s"===(s=t.I(r).split("."))[0]&&s[1]===o&&((u={vtext:t.I(e)}).v=e,n.vchildren||(n.vchildren=[]),n.vchildren[s[2]]=u)}function u(t,e){let n,o,i=null,c=!1,r=!1;for(var f=arguments.length;f-- >2;)R.push(arguments[f]);for(;R.length>0;){let e=R.pop();if(e&&void 0!==e.pop)for(f=e.length;f--;)R.push(e[f]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&c?i[i.length-1].vtext+=e:null===i?i=[r?{vtext:e}:e]:i.push(r?{vtext:e}:e),c=r}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(f in e.class)e.class[f]&&R.push(f);e.class=R.join(" "),R.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],T):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,v:void 0,m:!1}}function a(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function p(t){const[e,n,,o,i,c]=t,r={color:{F:"color"}};if(o)for(let t=0;t<o.length;t++){const e=o[t];r[e[0]]={H:e[1],U:!!e[2],F:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,Q:e[4]}}return{t:e,Z:n,l:Object.assign({},r),e:i,z:c?c.map(d):void 0}}function d(t){return{G:t[0],J:t[1],K:!!t[2],V:!!t[3],X:!!t[4]}}function v(t,e){if(W(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||4===t)return"false"!==e&&(""===e||!!e);if(t===Number||8===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function m(t,e,n){t.Y.add(e),t._.has(e)||(t._.set(e,!0),t.tt?t.queue.write(()=>y(t,e,n)):t.queue.tick(()=>y(t,e,n)))}async function y(t,n,o,i,c,r){if(t._.delete(n),!t.et.has(n)){if(c=t.nt.get(n)){if(c)try{c.componentWillUpdate&&await c.componentWillUpdate()}catch(e){t.ot(e,5,n)}}else{if((r=t.it.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{y(t,n,o)});if(c=function f(t,e,n,o,i,c,r,s){try{i=new(c=t.s(e).ct),function l(t,e,n,o,i,c){t.rt.set(o,n),t.ft.has(n)||t.ft.set(n,{}),Object.entries(Object.assign({color:{type:String}},e.properties,{mode:{type:String}})).forEach(([e,r])=>{(function f(t,e,n,o,i,c,r,s,l){if(e.type||e.state){const f=t.ft.get(n);e.state||(!e.attr||void 0!==f[i]&&""!==f[i]||(s=c&&c.st)&&W(l=s[e.attr])&&(f[i]=v(e.type,l)),n.hasOwnProperty(i)&&(void 0===f[i]&&(f[i]=v(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===f[i]&&(f[i]=o[i]),e.watchCallbacks&&(f[L+i]=e.watchCallbacks.slice()),w(o,i,function u(e){return(e=t.ft.get(t.rt.get(this)))&&e[i]},function a(n,o){(o=t.rt.get(this))&&(e.state||e.mutable)&&b(t,o,i,n,r)})}else e.elementRef?h(o,i,n):e.method&&h(n,i,o[i].bind(o))})(t,r,n,o,e,i,c)})}(t,c,e,i,n,o);try{if(r=t.lt.get(e)){for(s=0;s<r.length;s+=2)i[r[s]](r[s+1]);t.lt.delete(e)}}catch(n){t.ot(n,2,e)}}catch(n){i={},t.ot(n,7,e,!0)}return t.nt.set(e,i),i}(t,n,t.ut.get(n),o))try{c.componentWillLoad&&await c.componentWillLoad()}catch(e){t.ot(e,3,n)}}(function s(t,n,o,i,c){try{const c=n.ct.host,r=n.ct.encapsulation,f="shadow"===r&&t.o.n;let s,l=o;if(f&&(l=o.shadowRoot),!o["s-rn"]){t.at(t,t.o,n,o);const i=o["s-sc"];i&&(t.o.y(o,e(i,!0)),"scoped"===r&&t.o.y(o,e(i)))}if(i.render||i.hostData||c||s){t.pt=!0;const e=i.render&&i.render();let n;n=i.hostData&&i.hostData(),t.pt=!1;const c=t.dt.get(o)||{};c.v=l;const s=u(null,n,e);t.dt.set(o,t.render(o,c,s,f,r))}o["s-rn"]=!0,o["s-rc"]&&(o["s-rc"].forEach(t=>t()),o["s-rc"]=null)}catch(e){t.pt=!1,t.ot(e,8,o,!0)}})(t,t.s(n),n,c),n["s-init"]()}}function b(t,e,n,o,i,c){let r=t.ft.get(e);r||t.ft.set(e,r={});const f=r[n];if(o!==f&&(r[n]=o,c=t.nt.get(e))){{const t=r[L+n];if(t)for(let e=0;e<t.length;e++)try{c[t[e]].call(c,o,f,n)}catch(t){}}!t.pt&&e["s-rn"]&&m(t,e,i)}}function h(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function w(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function g(t,e,n,o,i,c){if(t.Y.delete(e),(i=t.it.get(e))&&((o=i["s-ld"])&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),t.it.delete(e)),t.vt.length&&!t.Y.size)for(;c=t.vt.shift();)c()}function $(t,e,n,o,i){if(n.connectedCallback=function(){(function n(t,e,o,i){t.mt.has(o)||(t.mt.set(o,!0),function c(t,e){const n=t.s(e);n.z&&n.z.forEach(n=>{n.K||t.o.p(e,n.G,function o(t,e,n,i){return o=>{(i=t.nt.get(e))?i[n](o):((i=t.lt.get(e)||[]).push(n,o),t.lt.set(e,i))}}(t,e,n.J),n.X,n.V)})}(t,o)),t.et.delete(o),t.yt.has(o)||(o["s-id"]||(o["s-id"]=t.bt()),t.ht=!0,t.Y.add(o),t.yt.set(o,!0),function r(t,e,n){for(n=e;n=t.o.A(n);)if(t.C(n)){t.j.has(e)||(t.it.set(e,n),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.ut.set(o,function n(t,e,o,i,c){return o.mode||(o.mode=t.wt(o)),o["s-cr"]||t.D(o,k)||t.n&&1===e.e||(o["s-cr"]=t.g(""),o["s-cr"]["s-cn"]=!0,t.f(o,o["s-cr"],t.W(o)[0])),t.n||1!==e.e||(o.shadowRoot=o),1===e.e&&t.n&&!o.shadowRoot&&t.gt(o,{mode:"open"}),i={$t:o["s-id"],st:{}},e.l&&Object.keys(e.l).forEach(n=>{(c=e.l[n].F)&&(i.st[c]=t.D(o,c))}),i}(t.o,e,o)),t.Mt(e,o)}))})(t,e,this)},n.disconnectedCallback=function(){(function e(t,n,o){if(!t.O&&function i(t,e){for(;e;){if(!t.c(e))return 9!==t.L(e);e=t.c(e)}}(t.o,n)){t.et.set(n,!0),g(t,n),s(t.dt.get(n),!0),t.o.d(n),t.mt.delete(n);{const e=t.nt.get(n);e&&e.componentDidUnload&&e.componentDidUnload()}[t.it,t.kt,t.ut].forEach(t=>t.delete(n))}})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c,r,f){if((c=t.nt.get(n))&&!t.et.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){t.j.set(n,!0),(f=t.Ct.has(n))||(t.Ct.set(n,!0),n["s-ld"]=void 0,t.o.y(n,o));try{s(t.dt.get(n)),(r=t.kt.get(n))&&(r.forEach(t=>t(n)),t.kt.delete(n)),!f&&c.componentDidLoad?c.componentDidLoad():f&&c.componentDidUpdate&&c.componentDidUpdate()}catch(e){t.ot(e,4,n)}g(t,n)}})(t,this,o)},n.forceUpdate=function(){m(t,this,i)},e.l){const o=Object.entries(e.l);{let t={};o.forEach(([e,{F:n}])=>{n&&(t[n]=e)}),t=Object.assign({},t),n.attributeChangedCallback=function(e,n,o){(function i(t,e,n,o){const i=t[E(n)];i&&(e[i]=o)})(t,this,e,o)}}(function c(t,e,n,o){e.forEach(([e,i])=>{const c=i.H;3&c?w(n,e,function n(){return(t.ft.get(this)||{})[e]},function n(c){b(t,this,e,v(i.Q,c),o)}):32===c&&h(n,e,N)})})(t,o,n,i)}}function M(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){let o=e[n];const i=t.i.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.k(n),t.x(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const k="ssrv",C="ssrc",j="$",x={},O={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},W=t=>null!=t,E=t=>t.toLowerCase(),N=()=>{},S="http://www.w3.org/1999/xlink";let A=!1;const R=[],T={forEach:(t,e)=>{t.forEach((t,n,o)=>e(a(t),n,o))},map:(t,e)=>t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(a(t),n,o)))},L="wc-";(function D(t,e,o,i,c,r,s){function a(t,e){const n=t.t;o.customElements.get(n)||($(x,v[n]=t,e.prototype,r,d),e.observedAttributes=Object.values(t.l).map(t=>t.F).filter(t=>!!t),o.customElements.define(t.t,e))}const d=o.performance,v={html:{}},y={},b=o[t]=o[t]||{},h=function w(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={i:n,n:!!n.documentElement.attachShadow,jt:!1,L:t=>t.nodeType,k:t=>n.createElement(t),M:(t,e)=>n.createElementNS(t,e),g:t=>n.createTextNode(t),xt:t=>n.createComment(t),f:(t,e,n)=>t.insertBefore(e,n),N:t=>t.remove(),x:(t,e)=>t.appendChild(e),y:(t,e)=>{t.classList.add(e)},W:t=>t.childNodes,c:t=>t.parentNode,T:t=>t.nextSibling,B:t=>t.previousSibling,S:t=>E(t.nodeName),I:t=>t.textContent,R:(t,e)=>t.textContent=e,D:(t,e)=>t.getAttribute(e),Ot:(t,e,n)=>t.setAttribute(e,n),Wt:(t,e,n,o)=>t.setAttributeNS(e,n,o),u:(t,e)=>t.removeAttribute(e),a:(t,e)=>t.hasAttribute(e),wt:e=>e.getAttribute("mode")||(t.Context||{}).mode,Et:(t,o)=>"child"===o?t.firstElementChild:"parent"===o?i.A(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t,p:(e,n,c,r,f,s,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.Et(e,s):"object"==typeof s?p=s:(u=n.split(":")).length>1&&(p=i.Et(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===O[u[1]]&&c(t)})),l=i.jt?{capture:!!r,passive:!!f}:!!r,t.ael(p,n,v,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,l),d[a]=null})},d:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},Nt:(t,n,o)=>{const i=new e.CustomEvent(n,o);return t&&t.dispatchEvent(i),i},A:(t,e)=>(e=i.c(t))&&11===i.L(e)?e.host:e,gt:(t,e)=>t.attachShadow(e)};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.jt=!0}))}catch(t){}return i}(b,o,i);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=o,e.location=o.location,e.document=i,e.resourcesUrl=e.publicPath=c,e.enableListener=((t,e,n,o,i)=>(function c(t,e,n,o,i,r){if(e){const c=t.rt.get(e),f=t.s(c);if(f&&f.z)if(o){const o=f.z.find(t=>t.G===n);o&&t.o.p(c,n,t=>e[o.J](t),o.X,void 0===r?o.V:!!r,i)}else t.o.d(c,n)}})(x,t,e,n,o,i)),b.h=u,b.Context=e;const g=o["s-defined"]=o["s-defined"]||{};let C=0;const x={o:h,St:a,At:e.emit,s:t=>v[h.S(t)],Rt:t=>e[t],isClient:!0,C:t=>!(!g[h.S(t)]&&!x.s(t)),bt:()=>t+C++,ot:(t,e,n)=>void 0,Tt:t=>(function e(t,n,o){return{create:M(t,n,o,"create"),componentOnReady:M(t,n,o,"componentOnReady")}})(h,y,t),queue:e.queue=function W(t,e){function n(e){return n=>{e.push(n),d||(d=!0,t.raf(c))}}function o(t){for(let e=0;e<t.length;e++)try{t[e](r())}catch(t){}t.length=0}function i(t,e){let n,o=0;for(;o<t.length&&(n=r())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function c(){p++,o(l);const e=r()+7*Math.ceil(p*(1/22));i(u,e),i(a,e),u.length>0&&(a.push(...u),u.length=0),(d=l.length+u.length+a.length>0)?t.raf(c):p=0}const r=()=>e.performance.now(),f=Promise.resolve(),s=[],l=[],u=[],a=[];let p=0,d=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){s.push(t),1===s.length&&f.then(()=>o(s))},read:n(l),write:n(u)}}(b,o),Mt:function N(t,e,n){if(t.ct)m(x,e,d);else{const n="string"==typeof t.Z?t.Z:t.Z[e.mode],o=!h.n;import(c+n+(o?".sc":"")+".entry.js").then(n=>{try{t.ct=n[(t=>E(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,c,r){if(i){const n=e.t+(c||j);if(!e[n]){const o=t.k("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.x(t.i.head,o)}}}(h,t,t.e,t.ct.style,t.ct.styleMode),m(x,e,d)}catch(e){t.ct=class{}}},t=>void 0)}},pt:!1,tt:!1,O:!1,at:n,it:new WeakMap,r:new WeakMap,yt:new WeakMap,mt:new WeakMap,Ct:new WeakMap,j:new WeakMap,rt:new WeakMap,ut:new WeakMap,nt:new WeakMap,et:new WeakMap,_:new WeakMap,kt:new WeakMap,lt:new WeakMap,dt:new WeakMap,ft:new WeakMap,Y:new Set,vt:[]};b.onReady=(()=>new Promise(t=>x.queue.write(()=>x.Y.size?x.vt.push(t):t()))),x.render=f(x,h);const S=h.i.documentElement;return S["s-ld"]=[],S["s-rn"]=!0,S["s-init"]=(()=>{x.j.set(S,b.loaded=x.tt=!0),h.Nt(o,"appload",{detail:{namespace:t}})}),function A(t,e,n){const o=n.querySelectorAll(`[${k}]`),i=o.length;let c,r,f,s,u,a;if(i>0)for(t.j.set(n,!0),s=0;s<i;s++)for(c=o[s],r=e.D(c,k),(f={}).vtag=e.S(f.v=c),t.dt.set(c,f),u=0,a=c.childNodes.length;u<a;u++)l(e,c.childNodes[u],f,r,!0)}(x,h,S),s.map(p).forEach(t=>a(t,class extends HTMLElement{})),x.ht||S["s-init"](),function R(t,e,n,o,i,c){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.s(e);if(o)if(t.j.has(e))n(e);else{const o=t.kt.get(e)||[];o.push(n),t.kt.set(e,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)e.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!n[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(x,b,o,o["s-apps"],o["s-cr"]),b.initialized=!0,x})(namespace,Context,window,document,resourcesUrl,hydratedCssClass,components);
})(window,document,{},"webcomponents","hydrated",[["sdx-accordion","vj0wejbo",1,[["arrowPosition",1,0,"arrow-position",2],["close",32],["closeAll",32],["el",64],["keepOpen",1,0,"keep-open",4],["open",32],["openAll",32],["toggle",32]],1],["sdx-accordion-arrow","z9psatxp",1,[["arrowPosition",1,0,"arrow-position",2],["direction",1,0,1,2],["hover",1,0,1,4]],1],["sdx-accordion-item","lrx7l0h9",1,[["el",64],["open",1,0,1,4]],1],["sdx-accordion-item-body","6hjksvbs",1,[["arrowPosition",1,0,"arrow-position",2],["el",64],["toggle",32]],1],["sdx-accordion-item-header","z9psatxp",1,[["arrowPosition",1,0,"arrow-position",2],["closeItem",32],["el",64],["expand",1,0,1,4],["openItem",32],["toggle",1]],1,[["click","onClick"],["mouseover","onMouseOver",0,1],["mouseout","onMouseOut",0,1]]],["sdx-accordion-item-section","ukzzycao",1,0,1],["sdx-button","resramti",1,[["size",1,0,1,2],["srHint",1,0,"sr-hint",2],["theme",1,0,1,2]],1],["sdx-dummy","kbfumsrw",0,0,1],["sdx-icon","4rzakz6x",1,[["colorClass",1,0,"color-class",2],["flip",1,0,1,2],["hidden",1,0,1,4],["iconName",1,0,"icon-name",2],["size",1,0,1,8],["srHint",1,0,"sr-hint",2]],1],["sdx-input","g0dvkxm6",1,[["autocomplete",1,0,1,4],["blurCallback",1,0,"blur-callback",2],["changeCallback",1,0,"change-callback",2],["clearable",1,0,1,4],["editable",1,0,1,4],["el",64],["focusCallback",1,0,"focus-callback",2],["getValue",32],["hitEnterCallback",1,0,"hit-enter-callback",2],["id",1,0,1,2],["inputCallback",1,0,"input-callback",2],["inputStyle",1],["placeholder",1,0,1,2],["selectTextOnFocus",1,0,"select-text-on-focus",4],["setFocus",32],["srHint",1,0,"sr-hint",2],["type",1,0,1,2],["unsetFocus",32],["value",1,0,1,2],["valueState",16]],1,[["focus","onFocus",0,0,1]]],["sdx-input-group","m5fgkxbd",1,[["changeCallback",1,0,"change-callback",2],["el",64],["getSelection",32],["inline",1,0,1,4],["inputItemElsSorted",16],["label",1,0,1,2],["name",1,0,1,2],["nameState",16],["selectNextInputItemElFrom",16],["selectPreviousInputItemElFrom",16],["selectedInputItemEls",16],["type",1,0,1,2],["typeState",16]],1],["sdx-input-item","zuj0lrkc",1,[["changeCallback",1,0,"change-callback",2],["checked",2,0,1,4],["disableFocus",1,0,"disable-focus",4],["disabled",1,0,1,4],["el",64],["inline",16],["name",1,0,1,2],["nameState",16],["selectedInputItemEls",16],["type",1,0,1,2],["typeState",16],["value",1,0,1,1]],1,[["click","onClick"],["keydown","handleKeyDown"]]],["sdx-itunes-autocomplete","sgdvhbvt",0,[["artists",16],["loading",16]],1],["sdx-loading-spinner","sgdvhbvt",1,0,1],["sdx-menu-flyout","ket3uytu",1,[["arrowEls",16],["close",32],["closeOnClick",1,0,"close-on-click",4],["contentEl",16],["direction",1,0,1,2],["directionState",16],["display",16],["displayChangeCallback",1,0,"display-change-callback",2],["el",64],["open",32],["toggle",32],["toggleEl",16]],1,[["click","onClick"],["touchend","onClick",0,1],["window:click","onWindowClick"],["window:touchend","onWindowClick",0,1],["mouseenter","onMouseEnter",0,1],["mouseleave","onMouseLeave",0,1]]],["sdx-menu-flyout-content","z76oxotn",1,[["directionState",16],["el",64]],1],["sdx-menu-flyout-cta","lluqkley",1,[["directionState",16],["el",64],["size",1,0,1,2]],1],["sdx-menu-flyout-list","pndectva",1,[["el",64]],1],["sdx-menu-flyout-list-item","tuaxecu3",1,[["directionState",16],["disabled",1,0,1,4],["el",64],["href",1,0,1,2],["selectable",1,0,1,4]],1],["sdx-menu-flyout-toggle","ctey5z48",1,[["display",16],["el",64],["toggle",16]],1,[["click","onClick"]]],["sdx-price","t8dhqap5",1,[["amount",1,0,1,8],["period",1,0,1,2],["size",1,0,1,8],["srHint",1,0,"sr-hint",2]],1],["sdx-progress-full","pmxzb83q",1,[["activeStep",16],["animated",1,0,1,4],["el",64],["getActiveStep",32],["nextStep",32],["previousActiveStep",16],["previousStep",32],["setActiveStep",32],["step",1,0,1,8],["stepChangeCallback",1,0,"step-change-callback",2],["stepsLabel",1,0,"steps-label",2]],1,[["window:resize","onWindowResizeThrottled",0,1]]],["sdx-progress-full-step","4fckupwo",1,[["el",64],["position",1,0,1,2],["status",1,0,1,2],["stepClickCallback",1,0,"step-click-callback",2],["value",1,0,1,8]],1],["sdx-ribbon","vm6fsiyb",1,[["design",1,0,1,2],["label",1,0,1,2],["position",1,0,1,2],["size",1,0,1,2]],1],["sdx-search","giakfpxr",1,[["changeCallback",1,0,"change-callback",2],["el",64],["inputValue",16],["placeholder",1,0,1,2],["searchSubmitCallback",1,0,"search-submit-callback",2],["srHint",1,0,"sr-hint",2],["srHintForButton",1,0,"sr-hint-for-button",2],["valueChangeCallback",1,0,"value-change-callback",2]],1,[["window:resize","onWindowResizeThrottled",0,1]]],["sdx-select","sgdvhbvt",1,[["animated",1,0,1,4],["animationDuration",16],["backgroundTheme",1,0,"background-theme",2],["changeCallback",1,0,"change-callback",2],["close",32],["disabled",1,0,1,4],["display",16],["el",64],["filter",16],["filterFunction",1,0,"filter-function",2],["filterInputFieldElValue",16],["filterable",1,0,1,4],["focussed",16],["foundMatches",16],["getSelection",32],["keyboardBehavior",1,0,"keyboard-behavior",2],["label",1,0,1,2],["loading",1,0,1,4],["maxHeight",1,0,"max-height",8],["multiple",1,0,1,4],["name",1,0,1,2],["noMatchesFoundLabel",1,0,"no-matches-found-label",2],["open",32],["optgroupEls",16],["optionElsSorted",16],["placeholder",1,0,1,2],["selectCallback",1,0,"select-callback",2],["selectionBatch",16],["selectionSorted",16],["toggle",32],["value",2]],1,[["focus","onFocus",0,0,1],["mousedown","onMouseDown",0,1],["mouseup","onMouseUp",0,1],["blur","onBlur",0,0,1],["window:click","onWindowClick"],["window:touchend","onWindowClick",0,1],["window:keydown","onKeyDown"]]],["sdx-select-optgroup","vi90ctc9",1,[["direction",16],["el",64],["filter",16],["filterFunction",16],["name",1,0,1,2]],1],["sdx-select-option","zuj0lrkc",1,[["direction",16],["disabled",1,0,1,4],["el",64],["filter",16],["filterFunction",16],["multiple",16],["placeholder",1,0,1,4],["select",16],["selected",1,0,1,4],["selectionSorted",16],["value",1,0,1,1]],1,[["click","onClick"]]],["sdx-show-more","cntqal2x",1,[["buttonTheme",1,0,"button-theme",2],["currentlyDisplayedItems",16],["fromLabel",1,0,"from-label",2],["incrementBy",1,0,"increment-by",8],["incrementCallback",1,0,"increment-callback",2],["initialItems",1,0,"initial-items",8],["moreLabel",1,0,"more-label",2],["totalItems",1,0,"total-items",8]],1],["sdx-sticker-circle","wontnuzu",1,[["bgColorClass",1,0,"bg-color-class",2],["bottom",1,0,1,8],["colorClass",1,0,"color-class",2],["contentWidth",1,0,"content-width",8],["left",1,0,1,8],["right",1,0,1,8],["size",1,0,1,8],["srHint",1,0,"sr-hint",2],["top",1,0,1,8]],1,[["window:resize","onWindowResizeThrottled",0,1]]],["sdx-text-truncate","r7eqzzej",1,[["el",64]],1]]);