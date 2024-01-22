(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["styling-overrides"],{"./node_modules/@reddit/shreddit.lib.client-adblock-detection/dist/index.js":function(e,t,n){"use strict";n.r(t),n.d(t,"getAdblockStatus",(function(){return A})),n.d(t,"getSynchronousAdblockStatus",(function(){return _})),n.d(t,"resetAdblockRunFlag",(function(){return L})),n.d(t,"createAcceptableAdsElement",(function(){return v})),n.d(t,"AdblockTestHelpers",(function(){return o}));var o={};n.r(o),n.d(o,"resetAdblockSignalMock",(function(){return D})),n.d(o,"forceAdblockDisabled",(function(){return T})),n.d(o,"forceNonEyeoAdblockEnabled",(function(){return $})),n.d(o,"forceAcceptableAdsDisabled",(function(){return j})),n.d(o,"forceEyeoAdblockerEnabled",(function(){return I}));const c="https://www.redditstatic.com/shreddit",i="adblock_bait_asset_domain",s="/assets/pix/ads/1.png",d="https://ad-delivery.net/px.gif?ch=2",a="promotedlink",r="jag8CityBio212023",l="adblock_detection_debug_mode",u=[s,d],b="adblock_detection_complete",m="adblock-element",y="adblock-eyeo-element";function f(e){if(!document.body.contains(e)){document.body.prepend(e);const n=t(e);return e.remove(),n}return t(e);function t(e){if(["BODY","HTML"].includes(e.tagName))return!1;if(e.hidden||!document.body.contains(e))return!0;const n=window.getComputedStyle(e);return"none"===n.display||"hidden"===n.visibility||!!e.parentElement&&t(e.parentElement)}}async function p(e){return new Promise(t=>{const n=new Image;n.onerror=()=>{t(!0)},n.onload=()=>{t(!1)},n.src=e})}function w(e){"enabled"===new URLSearchParams(window.location.search).get(l)&&console.debug("[adblock-detection] ",e)}function E(){const e=document.createElement("div");return e.style.width="1px",e.style.position="absolute",e.style.top="0",e.style.left="-1000px",e.style.display="block",e}let k,g=!1,h=!1;async function A(){return await O(),k}function _(){return k||{isAdblockEnabled:!1,isAcceptableAdsEnabled:void 0}}function L(){g=!1,h=!1}async function O(){g||(h?await async function(){!g&&h&&await new Promise(e=>{window.addEventListener(b,e,{once:!0})})}():(h=!0,k=await async function(){const e=performance.now(),t=()=>{w(`The detection logic ran in ${(performance.now()-e).toFixed(3)}ms`)},n=f(function(){const e=E();return e.id=y,e.classList.add(r),e}());w(n?"❌ Eyeo bait element was blocked":"✅ Eyeo bait element was not blocked");if(n||await(async()=>{const e=await p(d);return w(e?"❌ Eyeo bait asset was blocked":"✅ Eyeo bait asset was not blocked"),e})()){const e=f(v());w(e?"❌ Eyeo acceptable ads element was blocked":"✅ Eyeo acceptable ads element was not blocked"),t();const n={isAdblockEnabled:!0,isAcceptableAdsEnabled:!e};return w(`ℹ️ Final result: ${JSON.stringify(n)}`),n}const o=f(function(){const e=E();return e.id=m,e.classList.add("promoted"),e.dataset.beforeContent="advertisement",e}());w(o?"❌ Easylist bait element was blocked":"✅ Easylist bait element was not blocked");const a=o||await(async()=>{const e=await p(function(){const e=new URLSearchParams(window.location.search).get(i);if(e){const t=new URL(e);return t.pathname=s,t.toString()}return`${c}${s}`}());return w(e?"❌ Easylist bait asset was blocked":"✅ Easylist bait asset was not blocked"),e})();t();const l={isAdblockEnabled:a,isAcceptableAdsEnabled:!a&&void 0};return w(`ℹ️ Final result: ${JSON.stringify(l)}`),l}(),h=!1,g=!0,window.dispatchEvent(new Event(b))))}function v(){const e=E();return e.className=a,e}O();const S=window.Image,H="promoted-link-style",P="hide-ads-style";function D(){L();const e=document.getElementById(H);e&&e.remove();const t=document.getElementById(P);t&&t.remove(),window.Image=S}function T(){Object.defineProperty(HTMLImageElement.prototype,"src",{set:function(e){u.some(t=>e.includes(t))?"function"==typeof this.onload&&this.onload():Object.getPrototypeOf(this).src=e}})}function $(){const e=document.createElement("style");e.id=P,e.innerHTML=`\n    #${m} { display: none !important }\n  `,document.body.append(e),Object.defineProperty(HTMLImageElement.prototype,"src",{set:function(e){e.includes(s)&&"function"==typeof this.onerror?this.onerror():e.includes(d)&&"function"==typeof this.onload?this.onload():Object.getPrototypeOf(this).src=e}})}function j(){const e=document.createElement("style");e.id=H,e.innerHTML=`\n    .${a} { display: none !important }\n  `,document.body.append(e)}function I(){const e=document.createElement("style");e.id=P,e.innerHTML=`\n    #${m} { display: none !important }\n    #${y} { display: none !important }\n  `,document.body.append(e),Object.defineProperty(HTMLImageElement.prototype,"src",{set:function(e){u.some(t=>e.includes(t))?"function"==typeof this.onerror&&this.onerror():Object.getPrototypeOf(this).src=e}})}}}]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/styling-overrides.9e4530fe40da55ce9f37.js.map