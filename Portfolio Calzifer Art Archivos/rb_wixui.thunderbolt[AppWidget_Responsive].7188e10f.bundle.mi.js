!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[AppWidget_Responsive]",["react"],r):"object"==typeof exports?exports["rb_wixui.thunderbolt[AppWidget_Responsive]"]=r(require("react")):e["rb_wixui.thunderbolt[AppWidget_Responsive]"]=r(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var r={5329:function(r){"use strict";r.exports=e},448:function(e){function r(){return e.exports=r=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,n),a.exports}n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,{a:r}),r},n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";n.r(o),n.d(o,{components:function(){return x}});var e=n(448),r=n.n(e),t=n(5329),a=n.n(t);const i=13,s=27;function l(e){return r=>{r.keyCode===e&&(r.preventDefault(),r.stopPropagation(),r.currentTarget.click())}}l(32),l(i),l(s);const c=function(e){var r;let{pressed:t,expanded:n,haspopup:o,label:a,live:i,relevant:s,current:l,owns:c,controls:d,roleDescription:u,hidden:p,disabled:f,describedBy:b,labelledBy:y,errorMessage:v,atomic:m,role:x,busy:g,...h}=void 0===e?{}:e;const O=null!=(r=h.tabIndex)?r:h.tabindex,_={};return a&&(_["aria-label"]=a),i&&(_["aria-live"]=i),l&&(_["aria-current"]=l),t&&(_["aria-pressed"]=t),"boolean"==typeof p&&(_["aria-hidden"]=p),"boolean"==typeof n&&(_["aria-expanded"]=n),"boolean"==typeof f&&(_["aria-disabled"]=f),"boolean"==typeof m&&(_["aria-atomic"]=m),"boolean"==typeof g&&(_["aria-busy"]=g),"string"==typeof s&&(_["aria-relevant"]=s),"string"==typeof c&&(_["aria-owns"]=c),"string"==typeof d&&(_["aria-controls"]=d),"string"==typeof u&&(_["aria-roledescription"]=u),o&&(_["aria-haspopup"]=o),"number"==typeof O&&(_.tabIndex=O),x&&(_.role=x),b&&(_["aria-describedby"]=b),y&&(_["aria-labelledby"]=y),v&&(_["aria-errormessage"]=v),_};function d(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=d(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}var u=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=d(e))&&(n&&(n+=" "),n+=r);return n};const p="responsive-container-overflow",f="responsive-container-content";var b="d7EBK2";const y=a().forwardRef(((e,r)=>{let{children:t,className:n,isExperimentFixRoundBorderOn:o}=e;const i=o?[b]:[];return a().createElement("div",{className:u(n,...i),"data-testid":p,ref:r},t)})),v=(e,r)=>{let{containerLayoutClassName:n,overlowWrapperClassName:o,hasOverflow:i,hasScrollOverflow:s,shouldOmitWrapperLayers:l,children:d,role:p,label:b,extraRootClass:v="",ariaLive:m,ariaAttributes:x,tabIndex:g,isExperimentFixRoundBorderOn:h,tagName:O="div"}=e;const _=!l&&i,w=_?s?g||0:-1:void 0,j=(0,t.useCallback)((e=>_?a().createElement(y,{className:u(o,v),isExperimentFixRoundBorderOn:h},e):e),[_,o,v,h]),R=i?n:u(n,v),E={ref:r,"data-testid":f,tabIndex:w,...p?{role:p}:{},...b?{"aria-label":b}:{},...m?{"aria-live":m}:{},...c(x)};return"multi-column-layouter"===O?(E.class=R,E.style={visibility:"hidden"}):E.className=R,j(l?a().createElement(a().Fragment,null,d()):a().createElement(O||"div",E,d()))};var m=a().forwardRef(v);const x={AppWidget_Responsive:{component:e=>{const{id:n,children:o,containerProps:a,containerRootClassName:i=""}=e;return t.createElement("div",r()({id:n,className:i},(e=>Object.entries(e).reduce(((e,[r,t])=>(r.includes("data-")&&(e[r]=t),e)),{}))(e)),t.createElement(m,a,o))}}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[AppWidget_Responsive].7188e10f.bundle.min.js.map