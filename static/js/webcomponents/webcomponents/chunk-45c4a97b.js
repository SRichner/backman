/*! Built with http://stenciljs.com */
const{h:e}=window.webcomponents;var t;!function(e){e.setTypeState="SET_INPUT_TYPE",e.setNameState="SET_INPUT_NAME",e.setInline="SET_INLINE",e.selectInputItemEl="SELECT_INPUT_ITEM_EL",e.selectNextInputItemEl="SELECT_NEXT_INPUT_ITEM_EL",e.selectPreviousInputItemEl="SELECT_PREVIOUS_INPUT_ITEM_EL",e.registerInputItemEl="REGISTER_INPUT_ITEM_EL",e.unregisterInputItemEl="UNREGISTER_INPUT_ITEM_EL"}(t||(t={}));const I=(e={},I)=>{switch(I.type){case t.setTypeState:return Object.assign({},e,{typeState:I.typeState});case t.setNameState:return Object.assign({},e,{nameState:I.nameState});case t.setInline:return Object.assign({},e,{inline:I.inline});case t.selectInputItemEl:let n=e.selectedInputItemEls;return"radio"===e.typeState?e.selectedInputItemEls[0]===I.inputItemEl||(n=[I.inputItemEl]):n=e.selectedInputItemEls.indexOf(I.inputItemEl)>-1?n.filter(e=>e!==I.inputItemEl):n.concat(I.inputItemEl),Object.assign({},e,{selectedInputItemEls:n,selectNextInputItemElFrom:void 0,selectPreviousInputItemElFrom:void 0});case t.selectNextInputItemEl:return Object.assign({},e,{selectNextInputItemElFrom:I.currentSelectedInputItemEl,selectPreviousInputItemElFrom:void 0});case t.selectPreviousInputItemEl:return Object.assign({},e,{selectNextInputItemElFrom:void 0,selectPreviousInputItemElFrom:I.currentSelectedInputItemEl});case t.registerInputItemEl:return e.inputItemElsSorted.push(I.inputItemEl),e.inputItemElsSorted.sort((e,t)=>{const I=e.compareDocumentPosition(t);return I>Node.DOCUMENT_POSITION_PRECEDING?-1:I>Node.DOCUMENT_POSITION_FOLLOWING?1:0}),e;case t.unregisterInputItemEl:const s=e.inputItemElsSorted.indexOf(I.inputItemEl);return s>=0&&e.inputItemElsSorted.splice(s,1),e;default:return e}};export{t as a,I as b};