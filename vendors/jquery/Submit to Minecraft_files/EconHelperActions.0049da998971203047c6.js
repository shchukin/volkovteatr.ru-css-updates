(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["EconHelperActions"],{"./node_modules/lodash/_LazyWrapper.js":function(e,t,s){var r=s("./node_modules/lodash/_baseCreate.js"),o=s("./node_modules/lodash/_baseLodash.js"),n=4294967295;function d(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=n,this.__views__=[]}d.prototype=r(o.prototype),d.prototype.constructor=d,e.exports=d},"./node_modules/lodash/_LodashWrapper.js":function(e,t,s){var r=s("./node_modules/lodash/_baseCreate.js"),o=s("./node_modules/lodash/_baseLodash.js");function n(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=void 0}n.prototype=r(o.prototype),n.prototype.constructor=n,e.exports=n},"./node_modules/lodash/_baseLodash.js":function(e,t){e.exports=function(){}},"./node_modules/lodash/_baseSetData.js":function(e,t,s){var r=s("./node_modules/lodash/identity.js"),o=s("./node_modules/lodash/_metaMap.js"),n=o?function(e,t){return o.set(e,t),e}:r;e.exports=n},"./node_modules/lodash/_composeArgs.js":function(e,t){var s=Math.max;e.exports=function(e,t,r,o){for(var n=-1,d=e.length,i=r.length,a=-1,c=t.length,u=s(d-i,0),l=Array(c+u),m=!o;++a<c;)l[a]=t[a];for(;++n<i;)(m||n<d)&&(l[r[n]]=e[n]);for(;u--;)l[a++]=e[n++];return l}},"./node_modules/lodash/_composeArgsRight.js":function(e,t){var s=Math.max;e.exports=function(e,t,r,o){for(var n=-1,d=e.length,i=-1,a=r.length,c=-1,u=t.length,l=s(d-a,0),m=Array(l+u),p=!o;++n<l;)m[n]=e[n];for(var b=n;++c<u;)m[b+c]=t[c];for(;++i<a;)(p||n<d)&&(m[b+r[i]]=e[n++]);return m}},"./node_modules/lodash/_countHolders.js":function(e,t){e.exports=function(e,t){for(var s=e.length,r=0;s--;)e[s]===t&&++r;return r}},"./node_modules/lodash/_createBind.js":function(e,t,s){var r=s("./node_modules/lodash/_createCtor.js"),o=s("./node_modules/lodash/_root.js"),n=1;e.exports=function(e,t,s){var d=t&n,i=r(e);return function t(){return(this&&this!==o&&this instanceof t?i:e).apply(d?s:this,arguments)}}},"./node_modules/lodash/_createCtor.js":function(e,t,s){var r=s("./node_modules/lodash/_baseCreate.js"),o=s("./node_modules/lodash/isObject.js");e.exports=function(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var s=r(e.prototype),n=e.apply(s,t);return o(n)?n:s}}},"./node_modules/lodash/_createCurry.js":function(e,t,s){var r=s("./node_modules/lodash/_apply.js"),o=s("./node_modules/lodash/_createCtor.js"),n=s("./node_modules/lodash/_createHybrid.js"),d=s("./node_modules/lodash/_createRecurry.js"),i=s("./node_modules/lodash/_getHolder.js"),a=s("./node_modules/lodash/_replaceHolders.js"),c=s("./node_modules/lodash/_root.js");e.exports=function(e,t,s){var u=o(e);return function o(){for(var l=arguments.length,m=Array(l),p=l,b=i(o);p--;)m[p]=arguments[p];var h=l<3&&m[0]!==b&&m[l-1]!==b?[]:a(m,b);return(l-=h.length)<s?d(e,t,n,o.placeholder,void 0,m,h,void 0,void 0,s-l):r(this&&this!==c&&this instanceof o?u:e,this,m)}}},"./node_modules/lodash/_createHybrid.js":function(e,t,s){var r=s("./node_modules/lodash/_composeArgs.js"),o=s("./node_modules/lodash/_composeArgsRight.js"),n=s("./node_modules/lodash/_countHolders.js"),d=s("./node_modules/lodash/_createCtor.js"),i=s("./node_modules/lodash/_createRecurry.js"),a=s("./node_modules/lodash/_getHolder.js"),c=s("./node_modules/lodash/_reorder.js"),u=s("./node_modules/lodash/_replaceHolders.js"),l=s("./node_modules/lodash/_root.js"),m=1,p=2,b=8,h=16,_=128,f=512;e.exports=function e(t,s,j,g,v,y,O,x,w,P){var I=s&_,A=s&m,S=s&p,C=s&(b|h),k=s&f,B=S?void 0:d(t);return function m(){for(var p=arguments.length,b=Array(p),h=p;h--;)b[h]=arguments[h];if(C)var _=a(m),f=n(b,_);if(g&&(b=r(b,g,v,C)),y&&(b=o(b,y,O,C)),p-=f,C&&p<P){var D=u(b,_);return i(t,s,e,m.placeholder,j,b,D,x,w,P-p)}var M=A?j:this,L=S?M[t]:t;return p=b.length,x?b=c(b,x):k&&p>1&&b.reverse(),I&&w<p&&(b.length=w),this&&this!==l&&this instanceof m&&(L=B||d(L)),L.apply(M,b)}}},"./node_modules/lodash/_createPartial.js":function(e,t,s){var r=s("./node_modules/lodash/_apply.js"),o=s("./node_modules/lodash/_createCtor.js"),n=s("./node_modules/lodash/_root.js"),d=1;e.exports=function(e,t,s,i){var a=t&d,c=o(e);return function t(){for(var o=-1,d=arguments.length,u=-1,l=i.length,m=Array(l+d),p=this&&this!==n&&this instanceof t?c:e;++u<l;)m[u]=i[u];for(;d--;)m[u++]=arguments[++o];return r(p,a?s:this,m)}}},"./node_modules/lodash/_createRecurry.js":function(e,t,s){var r=s("./node_modules/lodash/_isLaziable.js"),o=s("./node_modules/lodash/_setData.js"),n=s("./node_modules/lodash/_setWrapToString.js"),d=1,i=2,a=4,c=8,u=32,l=64;e.exports=function(e,t,s,m,p,b,h,_,f,j){var g=t&c;t|=g?u:l,(t&=~(g?l:u))&a||(t&=~(d|i));var v=[e,t,p,g?b:void 0,g?h:void 0,g?void 0:b,g?void 0:h,_,f,j],y=s.apply(void 0,v);return r(e)&&o(y,v),y.placeholder=m,n(y,e,t)}},"./node_modules/lodash/_createWrap.js":function(e,t,s){var r=s("./node_modules/lodash/_baseSetData.js"),o=s("./node_modules/lodash/_createBind.js"),n=s("./node_modules/lodash/_createCurry.js"),d=s("./node_modules/lodash/_createHybrid.js"),i=s("./node_modules/lodash/_createPartial.js"),a=s("./node_modules/lodash/_getData.js"),c=s("./node_modules/lodash/_mergeData.js"),u=s("./node_modules/lodash/_setData.js"),l=s("./node_modules/lodash/_setWrapToString.js"),m=s("./node_modules/lodash/toInteger.js"),p="Expected a function",b=1,h=2,_=8,f=16,j=32,g=64,v=Math.max;e.exports=function(e,t,s,y,O,x,w,P){var I=t&h;if(!I&&"function"!=typeof e)throw new TypeError(p);var A=y?y.length:0;if(A||(t&=~(j|g),y=O=void 0),w=void 0===w?w:v(m(w),0),P=void 0===P?P:m(P),A-=O?O.length:0,t&g){var S=y,C=O;y=O=void 0}var k=I?void 0:a(e),B=[e,t,s,y,O,S,C,x,w,P];if(k&&c(B,k),e=B[0],t=B[1],s=B[2],y=B[3],O=B[4],!(P=B[9]=void 0===B[9]?I?0:e.length:v(B[9]-A,0))&&t&(_|f)&&(t&=~(_|f)),t&&t!=b)D=t==_||t==f?n(e,t,P):t!=j&&t!=(b|j)||O.length?d.apply(void 0,B):i(e,t,s,y);else var D=o(e,t,s);return l((k?r:u)(D,B),e,t)}},"./node_modules/lodash/_getData.js":function(e,t,s){var r=s("./node_modules/lodash/_metaMap.js"),o=s("./node_modules/lodash/noop.js"),n=r?function(e){return r.get(e)}:o;e.exports=n},"./node_modules/lodash/_getFuncName.js":function(e,t,s){var r=s("./node_modules/lodash/_realNames.js"),o=Object.prototype.hasOwnProperty;e.exports=function(e){for(var t=e.name+"",s=r[t],n=o.call(r,t)?s.length:0;n--;){var d=s[n],i=d.func;if(null==i||i==e)return d.name}return t}},"./node_modules/lodash/_getHolder.js":function(e,t){e.exports=function(e){return e.placeholder}},"./node_modules/lodash/_getWrapDetails.js":function(e,t){var s=/\{\n\/\* \[wrapped with (.+)\] \*/,r=/,? & /;e.exports=function(e){var t=e.match(s);return t?t[1].split(r):[]}},"./node_modules/lodash/_insertWrapDetails.js":function(e,t){var s=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;e.exports=function(e,t){var r=t.length;if(!r)return e;var o=r-1;return t[o]=(r>1?"& ":"")+t[o],t=t.join(r>2?", ":" "),e.replace(s,"{\n/* [wrapped with "+t+"] */\n")}},"./node_modules/lodash/_isLaziable.js":function(e,t,s){var r=s("./node_modules/lodash/_LazyWrapper.js"),o=s("./node_modules/lodash/_getData.js"),n=s("./node_modules/lodash/_getFuncName.js"),d=s("./node_modules/lodash/wrapperLodash.js");e.exports=function(e){var t=n(e),s=d[t];if("function"!=typeof s||!(t in r.prototype))return!1;if(e===s)return!0;var i=o(s);return!!i&&e===i[0]}},"./node_modules/lodash/_mergeData.js":function(e,t,s){var r=s("./node_modules/lodash/_composeArgs.js"),o=s("./node_modules/lodash/_composeArgsRight.js"),n=s("./node_modules/lodash/_replaceHolders.js"),d="__lodash_placeholder__",i=1,a=2,c=4,u=8,l=128,m=256,p=Math.min;e.exports=function(e,t){var s=e[1],b=t[1],h=s|b,_=h<(i|a|l),f=b==l&&s==u||b==l&&s==m&&e[7].length<=t[8]||b==(l|m)&&t[7].length<=t[8]&&s==u;if(!_&&!f)return e;b&i&&(e[2]=t[2],h|=s&i?0:c);var j=t[3];if(j){var g=e[3];e[3]=g?r(g,j,t[4]):j,e[4]=g?n(e[3],d):t[4]}return(j=t[5])&&(g=e[5],e[5]=g?o(g,j,t[6]):j,e[6]=g?n(e[5],d):t[6]),(j=t[7])&&(e[7]=j),b&l&&(e[8]=null==e[8]?t[8]:p(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=h,e}},"./node_modules/lodash/_metaMap.js":function(e,t,s){var r=s("./node_modules/lodash/_WeakMap.js"),o=r&&new r;e.exports=o},"./node_modules/lodash/_realNames.js":function(e,t){e.exports={}},"./node_modules/lodash/_reorder.js":function(e,t,s){var r=s("./node_modules/lodash/_copyArray.js"),o=s("./node_modules/lodash/_isIndex.js"),n=Math.min;e.exports=function(e,t){for(var s=e.length,d=n(t.length,s),i=r(e);d--;){var a=t[d];e[d]=o(a,s)?i[a]:void 0}return e}},"./node_modules/lodash/_replaceHolders.js":function(e,t){var s="__lodash_placeholder__";e.exports=function(e,t){for(var r=-1,o=e.length,n=0,d=[];++r<o;){var i=e[r];i!==t&&i!==s||(e[r]=s,d[n++]=r)}return d}},"./node_modules/lodash/_setData.js":function(e,t,s){var r=s("./node_modules/lodash/_baseSetData.js"),o=s("./node_modules/lodash/_shortOut.js")(r);e.exports=o},"./node_modules/lodash/_setWrapToString.js":function(e,t,s){var r=s("./node_modules/lodash/_getWrapDetails.js"),o=s("./node_modules/lodash/_insertWrapDetails.js"),n=s("./node_modules/lodash/_setToString.js"),d=s("./node_modules/lodash/_updateWrapDetails.js");e.exports=function(e,t,s){var i=t+"";return n(e,o(i,d(r(i),s)))}},"./node_modules/lodash/_updateWrapDetails.js":function(e,t,s){var r=s("./node_modules/lodash/_arrayEach.js"),o=s("./node_modules/lodash/_arrayIncludes.js"),n=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];e.exports=function(e,t){return r(n,(function(s){var r="_."+s[0];t&s[1]&&!o(e,r)&&e.push(r)})),e.sort()}},"./node_modules/lodash/_wrapperClone.js":function(e,t,s){var r=s("./node_modules/lodash/_LazyWrapper.js"),o=s("./node_modules/lodash/_LodashWrapper.js"),n=s("./node_modules/lodash/_copyArray.js");e.exports=function(e){if(e instanceof r)return e.clone();var t=new o(e.__wrapped__,e.__chain__);return t.__actions__=n(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}},"./node_modules/lodash/curry.js":function(e,t,s){var r=s("./node_modules/lodash/_createWrap.js"),o=8;function n(e,t,s){var d=r(e,o,void 0,void 0,void 0,void 0,void 0,t=s?void 0:t);return d.placeholder=n.placeholder,d}n.placeholder={},e.exports=n},"./node_modules/lodash/wrapperLodash.js":function(e,t,s){var r=s("./node_modules/lodash/_LazyWrapper.js"),o=s("./node_modules/lodash/_LodashWrapper.js"),n=s("./node_modules/lodash/_baseLodash.js"),d=s("./node_modules/lodash/isArray.js"),i=s("./node_modules/lodash/isObjectLike.js"),a=s("./node_modules/lodash/_wrapperClone.js"),c=Object.prototype.hasOwnProperty;function u(e){if(i(e)&&!d(e)&&!(e instanceof r)){if(e instanceof o)return e;if(c.call(e,"__wrapped__"))return a(e)}return new o(e)}u.prototype=n.prototype,u.prototype.constructor=u,e.exports=u},"./src/reddit/actions/economics/helpers/index.ts":function(e,t,s){"use strict";s.r(t),s.d(t,"fetchAll",(function(){return b})),s.d(t,"promptUserToBuyMoreCoins",(function(){return h}));s("./node_modules/core-js/modules/web.dom.iterable.js");var r=s("./node_modules/lodash/curry.js"),o=s.n(r),n=s("./src/reddit/actions/badge.ts"),d=s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),i=s("./src/reddit/actions/governance/communityDetails.ts"),a=s("./src/reddit/actions/governance/publicWalletsFetched.ts"),c=s("./src/reddit/featureFlags/index.ts"),u=s("./src/lib/initializeClient/installReducer.ts"),l=s("./src/reddit/reducers/features/comments/index.ts");Object(u.a)({features:{comments:l.a}});const m={badgesroyaletest:"t5_socj8",ethtrader:"t5_37jgj",fortnitebr:"t5_3oeyf",funkygoose:"t5_kzsl3"},p=o()((e,t)=>t.some(t=>c.d[t](e))),b=e=>async(t,s,r)=>{let{apiContext:o}=r;const{commentIds:c=[],postIds:u=[],skip:l=[]}=e;let b=e.subredditId;if(!b){e.subredditName&&(b=m[e.subredditName.toLowerCase()])}if(!b)return;const h=[],_=s(),f=p(_),j=_.features.comments.models,g=_.posts.models,v=new Set(_.user.account?[_.user.account.id]:[]);u.forEach(e=>{const t=g[e];t&&v.add(t.authorId)}),c.forEach(e=>{const t=j[e];t&&v.add(t.authorId)});const y=Array.from(v);!l.includes("badges")&&y.length&&f(["spBadges"])&&h.push(t(Object(n.j)({subredditId:b,userIds:y}))),!l.includes("communityDetails")&&f(["spPoints","spSpecialMemberships"])&&h.push(t(Object(i.a)({subredditId:b}))),!l.includes("subscription")&&f(["spSpecialMemberships"])&&h.push(t(Object(d.g)(b))),!l.includes("wallets")&&y.length&&f(["spPoints"])&&h.push(t(Object(a.a)({subredditId:b,userIds:y}))),await Promise.all(h)};function h(){window.open("/coins","_blank")}},"./src/reddit/actions/economics/me/thunkedActions.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));s("./src/lib/constants/index.ts"),s("./src/lib/makeRequest/index.ts");var r=s("./src/config.ts"),o=s("./src/reddit/endpoints/governance/requester.ts");var n=s("./src/reddit/selectors/experiments/econ/index.ts"),d=s("./src/lib/makeActionCreator/index.ts"),i=s("./src/reddit/actions/economics/me/constants.ts");const a=Object(d.a)(i.a),c=(Object(d.a)(i.b),Object(d.a)(i.c),e=>async(t,s,d)=>{let{apiContext:i}=d;if(Object(n.i)(s()))return;const c=e&&e.includeMemberships||!1,u=e&&e.forceFetch||!1,l=s();if(!l.economics.me.fetched||c&&!l.economics.me.data.specialMemberships||u){const e=await function(e,t){return Object(o.a)(e,{method:"get",endpoint:`${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`})}(i(),c);if(e.ok){const s=e.body;c&&!s.specialMemberships&&(s.specialMemberships={}),t(a(s))}}})},"./src/reddit/actions/economics/subredditPremium/actionCreators.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return i})),s.d(t,"b",(function(){return a})),s.d(t,"c",(function(){return c})),s.d(t,"d",(function(){return u})),s.d(t,"e",(function(){return l})),s.d(t,"f",(function(){return m})),s.d(t,"g",(function(){return p})),s.d(t,"h",(function(){return b})),s.d(t,"i",(function(){return h})),s.d(t,"j",(function(){return _}));var r=s("./src/lib/makeActionCreator/index.ts"),o=s("./src/reddit/actions/modal.ts"),n=s("./src/reddit/constants/modals.ts"),d=s("./src/reddit/actions/economics/subredditPremium/constants.ts");const i=Object(r.a)(d.a),a=Object(r.a)(d.b),c=Object(r.a)(d.c),u=Object(r.a)(d.d),l=Object(r.a)(d.e),m=Object(r.a)(d.f),p=Object(r.a)(d.g),b=Object(r.a)(d.h),h=Object(r.a)(d.i),_=e=>Object(o.h)(n.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL,{uploadAssetType:e})},"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return w})),s.d(t,"g",(function(){return P})),s.d(t,"b",(function(){return I})),s.d(t,"e",(function(){return A})),s.d(t,"f",(function(){return S})),s.d(t,"c",(function(){return C})),s.d(t,"h",(function(){return k})),s.d(t,"d",(function(){return B}));s("./node_modules/core-js/modules/web.dom.iterable.js");var r=s("./node_modules/lodash/forOwn.js"),o=s.n(r),n=s("./src/reddit/actions/governance/errorToast.ts"),d=s("./src/reddit/endpoints/economics/emojis.ts"),i=s("./src/reddit/endpoints/economics/specialMembership.ts"),a=s("./src/reddit/endpoints/economics/subredditPremium.ts"),c=s("./src/reddit/endpoints/governance/badges.ts"),u=s("./src/config.ts"),l=s("./src/reddit/endpoints/governance/requester.ts");function m(e,t,s){return Object(l.a)(e,{method:"get",endpoint:`${u.a.metaUrl}/products/${t}?owners=${s}`+"&types=emotes_pack,giphy"})}var p=s("./src/reddit/models/Badge/index.ts"),b=s("./src/reddit/models/Badge/managementPage.ts"),h=s("./src/reddit/models/Product/index.ts"),_=s("./src/reddit/reducers/economics/subredditPremium/index.ts"),f=s("./src/reddit/selectors/economics.ts"),j=s("./src/reddit/selectors/experiments/econ/index.ts"),g=s("./src/reddit/selectors/products.ts"),v=s("./src/reddit/actions/economics/me/thunkedActions.ts"),y=s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");function O(e){return!!e&&"removeBadge"===e.type}function x(e){if(!O(e))return e}const w=()=>async(e,t,s)=>{let{apiContext:r}=s;if(Object(j.i)(t()||!t().user.account))return;await e(Object(v.a)({includeMemberships:!0}));const o=t().economics.me.data.specialMemberships||{},n=Object.keys(o);if(n.length){const t=await Object(i.d)(r(),n);t.ok&&e(Object(y.g)(t.body))}},P=(e,t)=>async(s,r,o)=>{let{apiContext:n}=o;const d=r(),i=d.user.account,c=d.economics.subredditPremium[e],u=!c||c.status!==_.a.Fetched||t;if(!Object(j.i)(d)&&i&&u){const t=await Object(a.a)(n(),e,i.id);s(Object(y.i)(t))}},I=e=>async(t,s,r)=>{let{apiContext:o}=r;if(Object(j.i)(s()))return;const d=s(),i=d.user.account,a=Object(f.d)(d,e.subredditId),u=Object.keys(a).map(e=>a[e]).filter(Boolean);if(i&&e.badge){let s,r;s=e.placement===p.a.First?a[b.a.Loyalty]:e.placement===p.a.Second?a[b.a.Achievement]:a[b.a.Cosmetic],t(Object(y.a)({...e,badge:x(e.badge),currentAppliedBadges:u,userId:i.id})),O(e.badge)&&s?r=await Object(c.a)(o(),e.subredditId,s.id,!1):O(e.badge)||(r=await Object(c.a)(o(),e.subredditId,e.badge.id)),r&&!r.ok&&(t(Object(y.a)({...e,badge:s,currentAppliedBadges:u,userId:i.id})),Object(n.a)(t,r.error))}},A=(e,t)=>async(s,r,o)=>{let{apiContext:n}=o;if(Object(j.i)(r()))return;await s(P(e,!0));const d=r().economics.subredditPremium[e];if(d&&d.status===_.a.Fetched){const r=d.data.userOwnedBadges.find(e=>e.type===t.id);r&&(s(I({badge:r,subredditId:e,placement:r.placement})),s(Object(y.d)(b.c.MyBadges)))}},S=e=>async(t,s,r)=>{let{apiContext:i}=r;if(Object(j.i)(s()))return;const a=s().user.account,c=!s().economics.emotes[e],u=!s().economics.gifs[e];if(a&&(c||u)){const[s,r]=await Promise.all([Object(d.b)(i(),e),m(i(),e,a.id)]);if(!r.ok)return void Object(n.a)(t,r.error);const c={emotes:[],emoteCollections:s.ok?s.body:{},giphy:[]};o()(r.body,e=>{e.type===h.a.EmotesPack?c.emotes.push(e):e.type===h.a.Giphy&&c.giphy.push(e)}),t(Object(y.e)({subredditId:e,products:c}))}},C=e=>async(t,s,r)=>{let{apiContext:o}=r;const n=s();Object(j.i)(n)||t(Object(y.c)(e))},k=e=>async(t,s,r)=>{let{apiContext:o}=r;const n=s();Object(j.i)(n)||t(Object(y.j)(e))},B=(e,t,s)=>async(r,o,n)=>{let{apiContext:d}=n;if(!Object(j.i)(o())&&(await r(P(e,!0)),s&&t)){const s=o(),n=Object(f.d)(s,e),d=Object(g.a)(s,t);if(!n[Object(b.d)(d.placement)]&&d){const t=Object(f.i)(s,{subredditId:e,badge:d});t&&await r(I({badge:t,subredditId:e}))}r(C({subredditId:e,initialView:b.c.MyBadges}))}}},"./src/reddit/actions/governance/communityDetails.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("./src/lib/makeActionCreator/index.ts"),o=s("./src/reddit/endpoints/governance/community.ts"),n=s("./src/reddit/selectors/experiments/econ/index.ts"),d=s("./src/reddit/actions/governance/constants.ts");const i=Object(r.a)(d.a),a=e=>{let{subredditId:t}=e;return async(e,s,r)=>{let{apiContext:d}=r;if(Object(n.i)(s()))return;const a=await Object(o.a)(d(),{subredditId:t});a.ok&&e(i({subredditId:t,...a.body}))}}},"./src/reddit/actions/governance/publicWalletsFetched.ts":function(e,t,s){"use strict";var r=s("./src/lib/makeActionCreator/index.ts"),o=s("./src/reddit/endpoints/governance/wallet.ts"),n=s("./src/reddit/selectors/experiments/econ/index.ts"),d=s("./src/reddit/actions/governance/constants.ts");const i=Object(r.a)(d.m),a=Object(r.a)(d.n),c=Object(r.a)(d.l);t.a=e=>async(t,s,r)=>{let{apiContext:d}=r;if(Object(n.i)(s()))return;t(i({subredditId:e.subredditId}));const u=await Object(o.b)(d(),e);u.ok?t(a({subredditId:e.subredditId,...u.body})):t(c({error:u.error}))}},"./src/reddit/endpoints/economics/emojis.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"b",(function(){return d}));var r=s("./src/config.ts"),o=s("./src/reddit/endpoints/governance/requester.ts");const n=(e,t)=>Object(o.a)(e,{method:"post",endpoint:`${r.a.metaUrl}/orders`,data:{price:"0",currency:"usd",products:[{productId:t.productId,quantity:"1"}],subredditId:t.subredditId}}),d=(e,t)=>Object(o.a)(e,{method:"get",endpoint:`${r.a.metaUrl}/product-collections/${t}?types=emotes_pack`})},"./src/reddit/endpoints/economics/specialMembership.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return u})),s.d(t,"d",(function(){return l})),s.d(t,"c",(function(){return m}));var r=s("./src/config.ts"),o=s("./src/lib/omitHeaders/index.ts"),n=s("./src/reddit/constants/headers.ts"),d=s("./src/reddit/endpoints/governance/requester.ts"),i=s("./src/reddit/helpers/governanceErrorText/index.ts"),a=s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");function c(e,t){return Object(d.a)(e,{endpoint:`${r.a.metaUrl}/communities/${t.subredditId}/me`,method:"patch",data:{specialMemberships:{settings:{renew:!1}}}})}function u(e,t){return Object(d.a)(e,{endpoint:`${r.a.metaUrl}/ps/me/braintree-client-tokens`,method:"post",data:{username:t&&t.username}})}function l(e,t){return Object(d.a)(Object(o.a)(e,[n.a]),{endpoint:`${e.apiUrl}/api/info?id=${t.join(",")}`,method:"get"}).then(e=>{if(e.ok){const t=e.body.data.children.map(e=>{let{data:t}=e;return Object(a.a)(t)}).reduce((e,t)=>(e[t.id]=t,e),{});return{...e,body:t}}return e})}async function m(e,t){const s=await Object(d.a)(e,{endpoint:`${r.a.metaUrl}/orders`,method:"post",data:{...t,currency:"points",orderTarget:"special_membership",products:[{productId:"provisional_membership",quantity:"1"}],targetArgs:{renew:!1}}});if(!s.ok)throw new Error(`Error fetching provisional membership: ${Object(i.b)(s.error)}`);return s.body}},"./src/reddit/endpoints/economics/subredditPremium.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return u})),s.d(t,"b",(function(){return l}));s("./node_modules/core-js/modules/web.dom.iterable.js");var r=s("./node_modules/lodash/merge.js"),o=s.n(r),n=s("./src/config.ts"),d=s("./src/reddit/endpoints/governance/badges.ts"),i=s("./src/reddit/endpoints/governance/community.ts"),a=s("./src/reddit/endpoints/governance/products/badges.ts"),c=s("./src/reddit/endpoints/governance/requester.ts");async function u(e,t,s){const r={subredditId:t,badges:{},errors:{},collections:{},products:{},subscription:void 0,userOwnedBadges:[]},u=function(e,t){return Object(c.a)(e,{method:"get",endpoint:`${n.a.metaUrl}/product-collections/${t}?types=badge`})}(e,t),l=Object(i.a)(e,{subredditId:t}),m=Object(a.b)(e,t),p=Object(d.c)(e,t,s),[b,h,_,f]=await Promise.all([u,l,m,p]);if(b.ok?r.collections=b.body:r.errors.collections=b.error,h.ok){const e=h.body;r.subscription=e.specialMemberships,r.communityRaw=e}return _.ok?r.products=_.body:r.errors.products=_.error,f.ok?(o()(r.badges,f.body.badges),r.userOwnedBadges=f.body.userOwnedBadges):r.errors.userBadges=f.error,r}const l=(e,t)=>Object(c.a)(e,{endpoint:`${n.a.metaUrl}/products/${t}?types=badge,membership`,method:"delete"})},"./src/reddit/endpoints/governance/community.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var r=s("./src/config.ts"),o=s("./src/lib/constants/index.ts"),n=s("./src/reddit/endpoints/governance/requester.ts");function d(e,t){return Object(n.a)(e,{endpoint:`${r.a.metaUrl}/communities/${t.subredditId}/me`,method:o.nb.GET})}},"./src/reddit/models/Payments/index.ts":function(e,t,s){"use strict";var r,o,n,d;s.d(t,"b",(function(){return o})),s.d(t,"a",(function(){return n})),function(e){e.PayPal="paypal",e.Stripe="stripe"}(r||(r={})),function(e){e.PayPal="PAYPAL",e.Stripe="STRIPE"}(o||(o={})),function(e){e.NewPayPal="new-paypal",e.NewStripe="new-stripe",e.SavedPayPal="saved-paypal",e.SavedStripe="saved-stripe"}(n||(n={})),function(e){e.Comment="comment",e.Post="post",e.Profile="profile",e.Subreddit="subreddit"}(d||(d={}))},"./src/reddit/models/Product/index.ts":function(e,t,s){"use strict";var r;function o(e){return e.substring(e.lastIndexOf("|")+1)}s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return o})),function(e){e.Badge="badge",e.EmotesPack="emotes_pack",e.Giphy="giphy",e.Membership="membership"}(r||(r={}))},"./src/reddit/selectors/economics.ts":function(e,t,s){"use strict";s.d(t,"c",(function(){return g})),s.d(t,"k",(function(){return v})),s.d(t,"a",(function(){return y})),s.d(t,"t",(function(){return O})),s.d(t,"d",(function(){return x})),s.d(t,"g",(function(){return w})),s.d(t,"m",(function(){return P})),s.d(t,"f",(function(){return I})),s.d(t,"v",(function(){return A})),s.d(t,"i",(function(){return S})),s.d(t,"j",(function(){return C})),s.d(t,"h",(function(){return k})),s.d(t,"l",(function(){return B})),s.d(t,"n",(function(){return F})),s.d(t,"u",(function(){return E})),s.d(t,"q",(function(){return $})),s.d(t,"r",(function(){return W})),s.d(t,"b",(function(){return U})),s.d(t,"s",(function(){return H})),s.d(t,"o",(function(){return R})),s.d(t,"p",(function(){return N})),s.d(t,"e",(function(){return z}));s("./node_modules/core-js/modules/web.dom.iterable.js");var r=s("./src/reddit/featureFlags/index.ts"),o=s("./src/reddit/helpers/economics/sortBadges.ts"),n=s("./src/reddit/helpers/richTextJson/index.ts"),d=s("./src/reddit/models/Badge/index.ts"),i=s("./src/reddit/models/Badge/managementPage.ts"),a=s("./src/reddit/models/Payments/index.ts"),c=s("./src/reddit/models/Product/index.ts"),u=s("./src/reddit/reducers/economics/paymentSystems/index.ts"),l=s("./src/reddit/reducers/economics/subredditPremium/index.ts"),m=s("./src/reddit/selectors/comments.ts"),p=s("./src/reddit/selectors/commentSelector.ts"),b=s("./src/reddit/selectors/experiments/econ/index.ts"),h=s("./src/reddit/selectors/experiments/mediaInComments.ts"),_=s("./src/reddit/selectors/gold/powerups/index.ts"),f=s("./src/reddit/selectors/gold/powerups/benefitSettings.ts");const j=[],g=(e,t)=>{const s=e.economics.subredditPremium[t];if(s&&s.status===l.a.Fetched){const e=s.data.subscription,t=e&&e.active;if(t){let e=Object.keys(t);return e.length>1&&(e=e.filter(e=>"provisional_membership"!==e)),t[e[0]]||null}}return null},v=(e,t)=>{const s=g(e,t);return s&&s.endsAt||null};var y;!function(e){e[e.DontKnow=0]="DontKnow",e[e.NotSubscribed=1]="NotSubscribed",e[e.Subscribed=2]="Subscribed"}(y||(y={}));const O=(e,t)=>{const s=e.economics.subredditPremium[t];if(s&&s.status===l.a.Fetched){const s=v(e,t),r=Date.now();return s&&r<s?y.Subscribed:y.NotSubscribed}return y.DontKnow},x=(e,t)=>{const s=e.user.account,r=e.economics.subredditPremium[t];if(s&&r&&r.status===l.a.Fetched){const r=((e.users.appliedBadges[s.id]||{})[t]||j).map(t=>e.badges.models[t]).filter(Boolean);if(r)return{[i.a.Loyalty]:r.find(e=>e.placement===d.a.First),[i.a.Achievement]:r.find(e=>e.placement===d.a.Second),[i.a.Cosmetic]:r.find(e=>!e.placement)}}return{[i.a.Loyalty]:void 0,[i.a.Achievement]:void 0,[i.a.Cosmetic]:void 0}};function w(e,t){return(null==e?void 0:e.length)?Object(o.a)(e.map(e=>t[e]).filter(Boolean)):j}const P=(e,t,s)=>{var o;if(!r.d.spBadges(e))return j;return w(null===(o=e.users.appliedBadges[s])||void 0===o?void 0:o[t],e.badges.models)},I=(e,t)=>{const s=e.economics.subredditPremium[t.subredditId];if(s&&s.status===l.a.Fetched){const e=s.raw.collections[t.collectionId];if(e)return{highlight:e.extra&&e.extra.style&&e.extra.style.color,title:e.title}}};function A(e,t){const s=(e.economics.me.data.specialMemberships||{})[t];return!!(s&&s.settings&&s.settings.optOut)}function S(e,t){const{badge:s,subredditId:r}=t,o=e.user.account?e.user.account.id:void 0;if(Object(d.e)(s)&&s.userId===o)return s;const n=e.badges.models,i=e.user.ownedBadges[r]||{},a=Object(d.e)(s)?s.type:s.id;return Object.keys(i).map(e=>n[e]).find(e=>e&&e.type===a)}function C(e,t,s,r){const o=e.economics.subredditPremium[t];if(o&&o.status===l.a.Fetched){if(s===i.a.Loyalty||s===i.a.Achievement)return o.data.collections[s];if(s===i.a.Cosmetic&&r)return o.data.collections[s][r]}return j}function k(e,t){return C(e,t,i.a.Cosmetic,i.c.Gallery).some(e=>e.locked.some(e=>Object(d.f)(e)||!!e.price))}const B=e=>{const t=[],s=e.economics.paymentSystems;if(s.status===u.a.Fetched&&s.data.stripe&&s.data.stripe.sources){const e=s.data.stripe.sources;for(const s in e){const r=e[s];t.push({display:`${r.brand} •••• ${r.last4}`,id:s,type:a.a.SavedStripe})}}if(s.status===u.a.Fetched&&s.data.braintree&&s.data.braintree.sources){const e=s.data.braintree.sources;for(const s in e){const r=e[s];"PayPal"===r.brand&&t.push({display:"PayPal",id:r.id,type:a.a.SavedPayPal})}}return t};var D;!function(e){e[e.Fetched=0]="Fetched",e[e.Fetching=1]="Fetching",e[e.NotFetched=2]="NotFetched"}(D||(D={}));const M={prices:{},member:"Supporter",memberPlural:"Supporters",memberAlt:"Subreddit Supporter",memberAltPlural:"Subreddit Supporters",membership:"Membership",membershipAlt:"Special Membership"},L=(e,t)=>{if(!t)return{};const s=M.prices;((e,t)=>Object.values(e.products.models).filter(e=>e.type===c.a.Membership&&t&&e.subredditId===t))(e,t).forEach(e=>{e.price&&e.currency&&(s[e.currency]=e.price)});const r=g(e,t);return r&&r.price&&r.currency&&(s[r.currency]=r.price),s},F=(e,t)=>{var s,r,o,n;const d=(null===(n=null===(o=null===(r=null===(s=e.features)||void 0===s?void 0:s.crypto)||void 0===r?void 0:r.points)||void 0===o?void 0:o[t||""])||void 0===n?void 0:n.nomenclature)||M;return{prices:L(e,t),member:d.member||M.member,memberPlural:d.memberPlural||M.memberPlural,memberAlt:d.memberAlt||M.memberAlt,memberAltPlural:d.memberAltPlural||M.memberAltPlural,membership:d.membership||M.membership,membershipAlt:d.membershipAlt||M.membershipAlt}},E=e=>{const t=e.economics.paymentSystems;return!!(t.status===u.a.Fetched&&t.data&&t.data.tips&&t.data.tips.usdr&&t.data.tips.usdr.allowed)},$=(e,t)=>{const s=e.user.ownedBadges[t]||{};return!!Object.keys(s).length},W=e=>{const t=e.economics.paymentSystems;return t.status===u.a.Fetched&&!!t.data&&!!t.data.stripe&&!!t.data.stripe.stripeAccountId},U=(e,t)=>{let{subredditId:s}=t;if(Object(b.i)(e)||!s)return;return e.economics.emotes[s]},H=(e,t)=>{const s=t&&e.economics.gifs[t];return!!s&&s.hasGifProduct},R=(e,t)=>!!t&&!!Object(_.a)(e,{subredditId:t}),N=(e,t,s)=>{if(Object(h.b)(e))return!(!t||!Object(m.C)(e,{subredditId:t}))||(!!q(e,t)||!(!r.d.spGiphy(e)||!T(e,s)));if(!Object(f.a)(e,{subredditId:t}))return!1;if(Object(_.f)(e,{subredditId:t}))return!0;if(T(e,s))return!0;const o=r.d.spGiphy(e),n=H(e,t);return!!q(e,t)||o&&n},T=(e,t)=>{const s="replyToPost"!==t&&Object(p.c)(e,{commentId:t});if(s&&Object(n.a)(s))return!0},q=(e,t)=>{if(Object(b.i)(e))return!1;const s=r.d.spGiphy(e),o=H(e,t);return s&&o},z=(e,t,s)=>{if(t){const r=e.economics.banners.dismissedBanners[t];if(r&&r.data)return!!r.data[s]}}},"./src/reddit/selectors/gold/powerups/benefitSettings.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var r=s("./src/reddit/models/Gold/Powerups/index.ts"),o=s("./src/lib/initializeClient/installReducer.ts"),n=s("./src/reddit/actions/gold/constants.ts");const d={};var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;var s,r;switch(t.type){case n.mb:case n.nb:{const{benefitStatuses:r,subredditId:o}=t.payload;if(!r)return e;const n=null!==(s=e[o])&&void 0!==s?s:{},d={};return r.forEach(e=>{let{benefit:t,isEnabled:s}=e;d[t]=s}),{...e,[o]:{...n,...d}}}case n.L:{const{benefitStatuses:s,subredditId:o}=t.payload,n=null!==(r=e[o])&&void 0!==r?r:{},d={};return s.forEach(e=>{let{benefit:t,isEnabled:s}=e;d[t]=s}),{...e,[o]:{...n,...d}}}default:return e}},a=s("./node_modules/reselect/es/index.js");Object(o.a)({features:{powerupsBenefitSettings:i}});const c=(e,t)=>{let{subredditId:s}=t;return s?e.features.powerupsBenefitSettings[s]:null},u=(e=>Object(a.a)(c,t=>!!(null==t?void 0:t[e])))(r.a.CommentsWithGifs)},"./src/reddit/selectors/products.ts":function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return n}));s("./node_modules/core-js/modules/web.dom.iterable.js");var r=s("./src/reddit/models/Product/index.ts");const o=(e,t)=>{const s=e.products.models[t];if(s&&s.type===r.a.Badge)return s},n=(e,t)=>{let{productId:s}=t;const r=e.products.models[s];if(r){const t=r.subredditId,o=Object.keys(e.user.ownedBadges[t]||{}),n=e.badges.models,d=Date.now();let i=!1;return o.forEach(e=>{const t=n[e];t&&t.type===s&&t.endsAt>d&&(i=!0)}),i}return!1}}}]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconHelperActions.0049da998971203047c6.js.map